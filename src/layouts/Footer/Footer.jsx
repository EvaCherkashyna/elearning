import React from 'react'
import { FooterNav } from '../../components'
import styles from './footer.module.scss'

const logo = require("../../images/footerNavLogo.png")

const Footer = () => {
  return (
    <footer className={styles.container} >
      <div className={`${styles.content_container} common_style_container`}>
       <img className={styles.logo} src={logo}/>
       <p>Taking learning to the next level</p>
        <FooterNav></FooterNav>
      </div>
      <p className={styles.copy_rights}>Copyright &copy; 2016 eLearning Company</p>
    </footer>
  )
}

export default Footer
