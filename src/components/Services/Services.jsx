import React, { useState, useEffect } from 'react'
import styles from "./services.module.scss"

import { SearchIcon, CloseIcon } from '../../images/svg'

import ServicesPagination from '../ServicesPagination/ServicesPagination'
import { useSelector } from 'react-redux'
import { ArrowIcon } from '../../images/services'


const Services = () => {
  const { services, colors, occupation } = useSelector(state => state.services)

  const [currentServices, setCurrentServices] = useState(services)

  const [type, setType] = useState(colors[0])
  const [showTypes, setShowTypes] = useState(false)

  const [currentOcupation, setCurrentOcupation] = useState(occupation[0])
  const [showOccupation, setShowOccupation] = useState(true)

  const [serchValue, setSearchValue] = useState("")

  useEffect(() => {
    let filtered = services.filter(service => service.occupation.toLowerCase().includes(serchValue));
    if (type.color == "gray" && currentOcupation.toLowerCase() == "all") {
      filtered = filtered
    }
    else if (type.color == "gray") {
      filtered = filtered.filter(service => service.occupation.includes(currentOcupation))
    } else if (currentOcupation.toLowerCase() == "all") {
      filtered = filtered.filter(service => service.color == type.color)
    }
    else {
      filtered = filtered.filter(service => service.color == type.color).filter(service => service.occupation.includes(currentOcupation))
    }
    setCurrentServices(filtered)
  }, [type, currentOcupation, serchValue])
  const handleFilterByType = (choosedType) => {
    setShowTypes(false)
    setType(choosedType);
  }
  const handleByOccupation = (ocpt) => {
    setShowOccupation(false)
    setCurrentOcupation(ocpt)
  }
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Services We Provide</h2>
      <span className={styles.circle} />
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
      {/* <PaginationExample services={currentServices} /> */}
    </section>
  )
}

export default Services
