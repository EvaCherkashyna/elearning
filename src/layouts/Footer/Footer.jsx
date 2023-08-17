import React from 'react'
import { ContactUs, FooterNav } from '../../components'
import styles from './footer.module.scss'

const logo = require("../../images/footerNavLogo.png")

const Footer = () => {
  return (
    <footer className={styles.container} >
      <ContactUs />
      <div className={`${styles.nav_container}  `}>
        <div className={`${styles.content_container}`}>
          <img className={styles.logo} src={logo} />
          <p className={styles.description}>Taking learning to the next level</p>
        </div>

        <FooterNav/>
      </div>
      <p className={styles.copy_rights}>Copyright &copy; 2016 eLearning Company</p>

    </footer >
  )
}

export default Footer
