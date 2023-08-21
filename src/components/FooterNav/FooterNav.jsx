import React from 'react'
import styles from "./footerNav.module.scss"
import useWindowWidth from '../../hooks/useWindowWidth'
const FooterNav = () => {
  const width = useWindowWidth() < 580
  return (
    <nav className={styles.nav_container}>
      <ul className={styles.nav_list}>
        <span className={styles.list_column}>
          <li className={styles.list_item}>Home eLearning</li>
          <li className={styles.list_item}>Price Quote Services</li>
          <li className={styles.list_item}>Instructional Design</li>
        </span>
        <span className={styles.list_column}>
          <li className={styles.list_item}>eLearning Development </li>
          <li className={styles.list_item}> Mobile Learning</li>
          <li className={styles.list_item}> Product Training</li>
        </span>
        {!width && <span className={styles.list_column}>
          <li className={styles.list_item}>Custom eLearning </li>
          <li className={styles.list_item}>eLearning for Retail </li>
          <li className={styles.list_item}> eLearning Packages</li>
          <li className={styles.list_item}> Contact</li>
        </span>}
        {width && 
        <> <span className={styles.list_column}>
          <li className={styles.list_item}>Custom eLearning </li>
          <li className={styles.list_item}>eLearning for Retail </li>
        </span>
          <span className={styles.list_column}>
            <li className={styles.list_item}> eLearning Packages</li>
            <li className={styles.list_item}> Contact</li>
          </span>
        </>
        }
      </ul>

    </nav>
  )
}

export default FooterNav
