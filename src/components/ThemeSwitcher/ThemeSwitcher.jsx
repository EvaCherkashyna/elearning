import React, { useState } from 'react'
import useLocalStorage from 'use-local-storage'
import { useWindowWidth } from '../../hooks'

import styles from "./themeSwitcher.module.scss"
import { Sun, Moon } from "../../images/svg&icons"


const logo = require("../../images/headerLogo.png")

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('theme' ? 'light' : 'dark')
  const [checked, setChecked] = useState(theme == 'light' ? false : true)
  const windowWidth = useWindowWidth()

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : 'light'
    setTheme(newTheme)
  }

  const handleCheck = () => {
    switchTheme();
    setChecked(prev => !prev)
  }

  return (
    <article className={`${styles.container}  ${windowWidth < 767 && styles.mobile}`}>
      {windowWidth > 767 &&
        <>

          <img src={logo} className={styles.logo} />

          <h4 className={styles.heading}>Taking Learning to the Next Level</h4>
          <input className={styles.toggle} type="checkbox" role="switch" id="toggleBtn" checked={checked} />
          <div className={styles.toggle_container} onClick={handleCheck}>
            <span className={styles.toggle_text} >
              {checked ? "Nightmode" : "Daymode"}
            </span>

            <label className={styles.toggle_label} for="toggleBtn" >
              <img src={checked ? Moon : Sun} />
            </label>
          </div>
        </>}
      {windowWidth <= 767 && <>

        <img src={logo} className={styles.logo} />

        <h4 className={styles.heading}>Taking Learning to the Next Level</h4>
        <input className={styles.toggle} type="checkbox" role="switch" id="toggleBtn" checked={checked} />
        <div className={styles.toggle_container} onClick={handleCheck}>
          <span className={styles.toggle_text} >
            {checked ? "Nightmode" : "Daymode"}
          </span>

          <label className={styles.toggle_label} for="toggleBtn" >
            <img src={checked ? Moon : Sun} />
          </label>
        </div>
      </>}

    </article>
  )
}

export default ThemeSwitcher
