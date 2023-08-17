import React from 'react'
import styles from "./aboutClients.module.scss"
import checkmark from "../../images/svg/checkmark.svg"
const image = require("../../images/aboutClients.png")
const AboutClients = () => {
  return (
    <section className={styles.section}>
      <img src={image} alt="peoples" />
<div className={styles.content}>
      <h4 className={styles.content_title}>Our clients love the work we do </h4>
      <p className={styles.content_description}>
        We pride ourselves on developing training strategies with the learners in mind, ensuring your time and resources are well utilized.</p>
      <ul>
        <li className={styles.list_item}>
          <img src={checkmark} width="30px" />
          <p className={styles.item_paragraph}>
            We start each project with a careful analysiys of your
            learning needs
          </p>
        </li>
        <li className={styles.list_item}>
          <img src={checkmark} width="30px" />
          <p className={styles.item_paragraph}>
            We constantly look for ways to save your time and money while exceeding your expectations
          </p>
        </li>
        <li className={styles.list_item}>
          <img src={checkmark} width="30px" />
          <p className={styles.item_paragraph}>
            We don't stop working until you are satisfied with the products
            we deliver
          </p>
        </li>
      </ul>
</div>

    </section>
  )
}

export default AboutClients
