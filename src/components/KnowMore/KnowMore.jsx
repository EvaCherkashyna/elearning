import React from 'react'
import styles from './knowMore.module.scss'
import useScroll from '../../hooks/useScroll'
const image = require('../../images/knowMore.png')


const KnowMore = () => {
  const isScrolledTop = useScroll('know_more', "top_before");

  const isScrolledCenter = useScroll('know_more', "center");

  return (
    <section id="know_more"
      className={`${styles.section}
     ${isScrolledTop && styles.section_scrolled_top}
     ${isScrolledCenter && styles.section_scrolled_center}`}>
      <span className={`${styles.circle} ${isScrolledCenter && styles.scrolled}`} />
      <div className={styles.section_BGI}>
      </div>
      <div className={styles.content}>
        <div className={styles.left_side_content}>
          <h2 className={styles.title}>We Design <span>Learning.</span></h2>
          <h3 className={styles.description}>What We Can Do For You?</h3>
          <button className={styles.btn}>Know more</button>
        </div>
        <img className={styles.image} src={image} width="300px" alt="men" />
      </div>

    </section>
  )
}

export default KnowMore
