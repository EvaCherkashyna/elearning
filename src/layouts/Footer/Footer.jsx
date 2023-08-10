import React from 'react'
import { FooterNav } from '../../components'
import styles from './footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div>footer logo</div>
      <FooterNav></FooterNav>
    </footer>
  )
}

export default Footer
