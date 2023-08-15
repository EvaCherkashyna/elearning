import React from 'react'
import styles from './knowMore.module.scss'

const image = require('../../images/knowMore.jpg')
const KnowMore = () => {
  return (
    <section className={styles.knowMore_container}>
      <div>
        <h2 className={styles.heading_lg}>We Design <span>Learning.</span></h2>
        <h3>What We Can Do For You?</h3>
        <button>Know more</button>
      </div>
      <img src={image} width="300px" alt="men" />
    </section>
  )
}

export default KnowMore
