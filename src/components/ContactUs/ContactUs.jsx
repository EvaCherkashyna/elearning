import React from 'react'

import styles from "./contactUs.module.scss"

const ContactUs = () => {

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <section id="contact_us" className={styles.section}>
      <h2 className={styles.title}>Talk To Us About Your Project</h2>
      <p className={styles.description}>We will never send spam or add you to a mailing list</p>
      <form className={styles.form}>
        <input  className={`${styles.input} ${styles.sm_input}`} type='name' placeholder='Enter your Name' autoComplete="off"/>
        <input className={`${styles.input} ${styles.sm_input}`} type='email' placeholder='Enter your Email Address' autoComplete="off"/>
        <textarea className={`${styles.input} ${styles.lg_input}`} type='text' placeholder='Your Message' autoComplete={false} />
        <button className={styles.btn}  onClick={(e)=>handleSubmit(e)} type='submit'>Send</button>
      </form>
    </section>
  )
}

export default ContactUs
