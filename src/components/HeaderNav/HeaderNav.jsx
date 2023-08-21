import React, { useState } from 'react'
import styles from './headerNav.module.scss'
import logo from "../../images/svg/logo.svg"
import useWindowWidth from '../../hooks/useWindowWidth'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import { AiOutlineMenu,AiOutlineCloseCircle } from "react-icons/ai";

const HeaderNav = () => {
  const windowWidth = useWindowWidth()
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className={`${styles.nav_container} common_style_container`}>
      <img src={logo} className={styles.logo} />
      {windowWidth > 767 &&

        <ul className={styles.nav_list}>
          <li>Home</li>
          <li>Services</li>
          <li>Instructional Design</li>
          <li>eLearning Development</li>
          <li>eLearning Price Quote</li>
          <li>eLearning Packages</li>
          <li>Contact</li>
        </ul>
      }
      {windowWidth <= 767 &&
        <div className={styles.burger} onClick={() => { }}>
          <button className={styles.burger_btn} onClick={() => setOpenMenu(prev => !prev)}>
            <AiOutlineMenu  className={styles.burger_icon}/>
          </button>
          <div  className={`${styles.burger_list_container} ${openMenu && styles.open}`}>
            <ul >
              <li>Home</li>
              <li>Services</li>
              <li>Instructional Design</li>
              <li>eLearning Development</li>
              <li>eLearning Price Quote</li>
              <li>eLearning Packages</li>
              <li>Contact</li>
            </ul>
            <ThemeSwitcher />
            <AiOutlineCloseCircle onClick={() => setOpenMenu(prev => !prev)} className={styles.burger_icon_close}/>
          </div>
        </div>
      }
    </nav>
  )
}

export default HeaderNav
