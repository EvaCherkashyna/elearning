import styles from "./services.module.scss"

import { SearchIcon, CloseIcon } from '../../images/svg'

import ServicesPagination from '../ServicesPagination/ServicesPagination'
import { useSelector } from 'react-redux'
import { ArrowIcon } from '../../images/services'
import useFilters from '../../hooks/useFilters'
import useScroll from "../../hooks/useScroll"


const Services = () => {
  const { colors, occupation } = useSelector(state => state.services)
  const isScrolledTop = useScroll('services', "top_before");
  const {
    currentServices,
    currentOcupation,
    type,
    showTypes,
    showOccupation,
    serchValue,
    setShowTypes,
    setSearchValue,
    handleFilterByType,
    setShowOccupation,
    handleByOccupation
  } = useFilters();

  return (
    <section id="services" className={`${styles.section} ${isScrolledTop && styles.scrolled}`}>
      <h2 className={styles.title}>Services We Provide</h2>
      <span className={`${styles.circle} ${isScrolledTop && styles.scrolled}`} />
      <div className={styles.filters_container}>
        <div className={styles.search_label}>
          <input value={serchValue}
            onChange={({ target: { value } }) => setSearchValue(value.toLowerCase())}
            className={styles.search} type="text" placeholder='Search' id="search" />
          <span className={styles.searchIcon}>  <SearchIcon /></span>

        </div>
        <div className={styles.type_container}>
          <p className={styles.type_label}>Type</p>
          {showTypes &&
            <>
              <ul className={styles.type_select}>
                {colors?.map((color, index) =>
                  <li onClick={() => handleFilterByType(color)} key={index} className={styles.type_item} style={color.styles}></li>
                )}
              </ul>
              <span className={styles.closeIcon} onClick={() => setShowTypes(false)}><CloseIcon /></span>
            </>
          }
          {!showTypes &&
            <div onClick={setShowTypes.bind(true)} className={styles.type_item_selected} style={type.styles}>
              <span className={styles.type_icon} ><ArrowIcon outline={type.color.includes("outline")} /></span>
            </div>
          }
        </div>
        <div className={styles.occupation_container}>
          <p className={styles.occupation_label}>Ocuppation</p>
          {
            showOccupation &&
            <ul className={styles.occupation_select}>
              {occupation.map((ocpt, index) =>
                <li onClick={() => handleByOccupation(ocpt)}
                  key={index}
                  className={styles.occupation_item}
                >
                  {ocpt}
                </li>)}
              <span className={styles.closeIcon} onClick={() => setShowOccupation(false)}><CloseIcon /></span>
            </ul>
          }
          {
            !showOccupation &&
            <div onClick={setShowOccupation.bind(true)} className={`${styles.occupation_select} ${styles.occupation_select_closed}`}>
              <span className={styles.occupation_item}>{currentOcupation}</span>
              <ArrowIcon rotate={true} />
            </div>
          }

        </div>
      </div>
      <ServicesPagination services={currentServices} />
    </section>
  )
}

export default Services
