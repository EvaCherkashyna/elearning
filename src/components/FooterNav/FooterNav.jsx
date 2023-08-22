import React from 'react'
import styles from "./footerNav.module.scss"
import {useWindowWidth} from '../../hooks'
const FooterNav = () => {

  const width = useWindowWidth() < 580
  const scrollBy = (blockId) => {
    const element = document.getElementById(blockId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scroll({
        top: y,
        behavior: 'smooth'
      });
    }
  };
  return (
    <nav className={styles.nav_container}>
      <ul className={styles.nav_list}>
        <span className={styles.list_column}>
          <li onClick={scrollBy.bind(null,"header")} className={styles.list_item}>Home eLearning</li>
          <li onClick={scrollBy.bind(null,"services")} className={styles.list_item}>Price Quote Services</li>
          <li onClick={scrollBy.bind(null,"inst_design")} className={styles.list_item}>Instructional Design</li>
        </span>
        <span className={styles.list_column}>
          <li onClick={scrollBy.bind(null,"know_more")} className={styles.list_item}>eLearning Development </li>
          <li onClick={scrollBy.bind(null,"clients")} className={styles.list_item}> Mobile Learning</li>
          <li onClick={scrollBy.bind(null,"clients")} className={styles.list_item}> Product Training</li>
        </span>
        {!width && <span className={styles.list_column}>
          <li onClick={scrollBy.bind(null,"services")} className={styles.list_item}>Custom eLearning </li>
          <li onClick={scrollBy.bind(null,"services")} className={styles.list_item}>eLearning for Retail </li>
          <li onClick={scrollBy.bind(null,"clients")} className={styles.list_item}> eLearning Packages</li>
          <li onClick={scrollBy.bind(null,"contact_us")} className={styles.list_item}> Contact</li>
        </span>}
        {width && 
        <> <span className={styles.list_column}>
          <li onClick={scrollBy.bind(null,"services")} className={styles.list_item}>Custom eLearning </li>
          <li onClick={scrollBy.bind(null,"services")} className={styles.list_item}>eLearning for Retail </li>
        </span>
          <span className={styles.list_column}>
          <li onClick={scrollBy.bind(null,"clients")} className={styles.list_item}> eLearning Packages</li>
          <li onClick={scrollBy.bind(null,"contact_us")} className={styles.list_item}> Contact</li>
          </span>
        </>
        }
      </ul>

    </nav>
  )
}

export default FooterNav
