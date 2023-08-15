import React from 'react'
import styles from "./footerNav.module.scss"
const FooterNav = () => {
  return (
    <nav className={styles.nav_container}>
      <ul className={styles.nav_list}>
        <li>Home eLearning</li>
        <li>Price Quote Services</li>
        <li>Instructional Design</li>
        <li>eLearning Development </li>
        <li> Mobile Learning</li>
        <li> Product Training</li>
        <li>Custom eLearning </li>
        <li>eLearning for Retail </li>
        <li> eLearning Packages</li>
        <li> Contact</li>
      </ul>
    
    </nav>
  )
}

export default FooterNav
