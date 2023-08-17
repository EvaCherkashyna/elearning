import React from 'react'
import styles from "./instructionalDesign.module.scss"
import checkmark from "../../images/svg/checkmark.svg"

const image = require("../../images/instructionalDesign.png")
const InstructionalDesign = () => {
  return (
    <section className={styles.section}>
       <span className={styles.circle} />
      <h2 className={styles.title}> Instructional Design</h2>
      <div className={styles.content}>
        <img src={image} alt="peoples" />
        <div className={styles.right_side_content}>

          <h4 className={styles.content_title}>We know learning inside and out </h4>
          <p className={styles.content_description}>Our instructional design team will work hard to align your business goals with your learning objectives to ensure the training supports your business strategies.</p>
          <ul>
            <li className={styles.list_item}>
              <img src={checkmark} width="30px" />
              <p className={styles.item_paragraph}>Each project requires a unique approach, and we are ready for the challenge</p>
            </li>
            <li className={styles.list_item}>
              <img src={checkmark} width="30px" />
              <p className={styles.item_paragraph}>Our expertise in the training and development industry will make your project a success</p>
            </li>
            <li className={styles.list_item}>
              <img src={checkmark} width="30px" />
              <p className={styles.item_paragraph}>
                Your goals and deadlines are our priority
              </p>
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default InstructionalDesign
