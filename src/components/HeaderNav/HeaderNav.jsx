import React, { useState } from 'react'
import {useWindowWidth} from '../../hooks'
import {ThemeSwitcher} from '..'

import styles from './headerNav.module.scss'
import logo from "../../images/svg&icons/logo.svg"
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";


const HeaderNav = () => {

  const windowWidth = useWindowWidth()
  const [openMenu, setOpenMenu] = useState(false)

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
  const handleScroll = (id) => {
    setOpenMenu(false);
    scrollBy(id);
  }
  return (
    <nav className={`${styles.nav_container} common_style_container`}>
      <img src={logo} className={styles.logo} />
      {windowWidth > 767 &&

        <ul className={styles.nav_list}>
          <li onClick={scrollBy.bind(null,"header")}>Home</li>
          <li onClick={scrollBy.bind(null,"services")}>Services</li>
          <li onClick={scrollBy.bind(null,"inst_design")}>Instructional Design</li>
          <li onClick={scrollBy.bind(null,"know_more")}>eLearning Development</li>
          <li onClick={scrollBy.bind(null,"clients")}>eLearning Price Quote</li>
          <li onClick={scrollBy.bind(null,"clients")}>eLearning Packages</li>
          <li onClick={scrollBy.bind(null,"contact_us")}>Contact</li>
        </ul>
      }
      {windowWidth <= 767 &&
        <div className={styles.burger} onClick={() => { }}>
          <button className={styles.burger_btn} onClick={() => setOpenMenu(prev => !prev)}>
            <AiOutlineMenu className={styles.burger_icon} />
          </button>
          <div className={`${styles.burger_list_container} ${openMenu && styles.open}`}>
            <ul >
              <li onClick={() => handleScroll("header")}>Home</li>
              <li onClick={() => handleScroll("services")}>Services</li>
              <li onClick={() => handleScroll("inst_design")}>Instructional Design</li>
              <li onClick={() => handleScroll("know_more")}>eLearning Development</li>
              <li onClick={() => handleScroll("clients")}>eLearning Price Quote</li>
              <li onClick={() => handleScroll("clients")}>eLearning Packages</li>
              <li onClick={() => handleScroll("contact_us")}>Contact</li>
            </ul>
            <ThemeSwitcher />
            <AiOutlineCloseCircle onClick={() => setOpenMenu(prev => !prev)} className={styles.burger_icon_close} />
          </div>
        </div>
      }
    </nav>
  )
}

export default HeaderNav
