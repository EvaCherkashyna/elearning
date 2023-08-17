import React from 'react'
import styles from './knowMore.module.scss'

const image = require('../../images/knowMore.png')
const KnowMore = () => {
  return (
    <section className={styles.section}>
      <span className={styles.circle} />
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
