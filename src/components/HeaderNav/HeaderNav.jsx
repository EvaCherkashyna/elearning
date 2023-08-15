import React from 'react'
import styles from './headerNav.module.scss'
import logo from "./logo.svg"
// const logo = require("../../images/navLogo.png")
const HeaderNav = () => {
  return (
    <nav className={`${styles.nav_container} common_style_container`}>
      <img src={logo} className={styles.logo} />
      <ul className={styles.nav_list}>
        <li>Home</li>
        <li>Services</li>
        <li>Instructional Design</li>
        <li>eLearning Development</li>
        <li>eLearning Price Quote</li>
        <li>eLearning Packages</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default HeaderNav
