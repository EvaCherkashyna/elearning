import React from 'react'
import { useWindowWidth } from '../../hooks'
import { ThemeSwitcher } from '..'
import Slider from '../Slider/Slider'

import styles from './headerBanner.module.scss'
import { sliders } from '../../images/slider/sliders'

const HeaderBanner = () => {

  const windowWidth = useWindowWidth()

  return (
    <div id="header" className={`${styles.banner} common_style_container`}>
      {windowWidth > 767 && < ThemeSwitcher />}
      <Slider cards={sliders} />
    </div>
  )
}

export default HeaderBanner
