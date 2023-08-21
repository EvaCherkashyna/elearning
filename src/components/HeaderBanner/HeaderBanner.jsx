import React from 'react'
import styles from './headerBanner.module.scss'
import { ThemeSwitcher } from '..'
import { sliders } from '../../images/slider/sliders'
import Slider from '../Slider/Slider'
import useWindowWidth from '../../hooks/useWindowWidth'
const HeaderBanner = () => {
  const windowWidth = useWindowWidth()
  return (
    <div className={`${styles.banner} common_style_container`}>
      {windowWidth > 767 && < ThemeSwitcher />}
      <Slider cards={sliders} />
    </div>
  )
}

export default HeaderBanner
