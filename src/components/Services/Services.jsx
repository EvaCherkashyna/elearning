import React, { useState } from 'react'
import styles from "./services.module.scss"
import { colors, occupation, services } from "./servicesData.js"
import { SearchIcon, CloseIcon } from '../../images/svg'

import ServicesPagination from '../ServicesPagination/ServicesPagination'
import { useSelector } from 'react-redux'
import { ArrowIcon, NextIcon } from '../../images/services'

const Services = () => {
  const services = useSelector(state => state.services.services)
  const [currentServices, setCurrentServices] = useState(services)
  const [type, setType] = useState(colors[0])
  const [typesOpen, setTypesOpen] = useState(false)

  const handleFilterByType = (type) => {
    if (type.color == "gray") {
      setCurrentServices(services)
    } else {
      const filteredServices = services.filter((service) => service.color == type.color)
      setCurrentServices(filteredServices)
    }
    console.log(type)
    setType(type);
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Services We Provide</h2>
      <span className={styles.circle} />
      <div className={styles.filters_container}>
        <div className={styles.search_label}>
          <input className={styles.search} type="text" placeholder='Search' id="search" />
          <span className={styles.searchIcon}>  <SearchIcon /></span>

        </div>
        <div className={styles.type_container}>
          <p className={styles.type_label}>Type</p>
          {typesOpen &&
            <>
              <ul className={styles.type_select}>
                {colors?.map((color, index) =>
                  <li onClick={() => handleFilterByType(color)} key={index} className={styles.type_item} style={color.styles}></li>
                )}
              </ul>
              <span className={styles.closeIcon} onClick={() => setTypesOpen(false)}><CloseIcon /></span>
            </>
          }
          {!typesOpen &&
            <div onClick={setTypesOpen.bind(true)} className={styles.type_item_selected} style={type.styles}>
              <span className={styles.type_icon} ><ArrowIcon outline={type.color.includes("outline")} /></span>
            </div>
          }
        </div>
        <div className={styles.occupation_container}>
          <p className={styles.occupation_label}>Ocuppation</p>
          <ul className={styles.occupation_select}>
            {occupation.map((item, index) => <li key={index} className={styles.occupation_item}>{item} </li>)}
            <span className={styles.closeIcon}><CloseIcon /></span>
          </ul>
        </div>
      </div>
      <ServicesPagination services={currentServices} />
    </section>
  )
}

export default Services
