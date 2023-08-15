import React from 'react'
import styles from './headerBanner.module.scss'
import { ThemeSwitcher } from '..'
import { sliders } from '../../images/slider/sliders'
import Slider from '../Slider/Slider'
const HeaderBanner = () => {
  return (
    <div className={`${styles.banner} common_style_container`}>
      <ThemeSwitcher />
      <Slider cards={sliders}/>
    </div>
  )
}

export default HeaderBanner
