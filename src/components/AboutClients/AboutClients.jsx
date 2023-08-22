import React from 'react'
import { useWindowWidth } from '../../hooks'

import checkmark from "../../images/svg&icons/checkmark.svg"
import styles from "./aboutClients.module.scss"

const image = require("../../images/aboutClients.png")

const AboutClients = () => {

  const width = useWindowWidth() > 767

  return (
    <section id="clients" className={styles.section}>
      {!width &&
        <>
          <h4 className={styles.content_title}>Our clients love the work we do </h4>
          <p className={styles.content_description}>
            We pride ourselves on developing training strategies with the learners in mind, ensuring your time and resources are well utilized.</p>
        </>}
      <div className={styles.content}>
        <div className={styles.left_side_content}>
          {width &&
            <>
              <h4 className={styles.content_title}>Our clients love the work we do </h4>
              <p className={styles.content_description}>
                We pride ourselves on developing training strategies with the learners in mind, ensuring your time and resources are well utilized.</p>
            </>}
          <ul className={styles.list}>
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
        <img className={styles.img} src={image} alt="peoples" />
      </div>
    </section>
  )
}

export default AboutClients
