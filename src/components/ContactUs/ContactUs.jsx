import React from 'react'

const ContactUs = () => {
  return (
    <section>
      <h2>Talk To Us About Your Project</h2>
      <p>We will never send spam or add you to a mailing list</p>
      <form>
        <input type='text' placeholder='Enter your Name' />
        <input type='text' placeholder='Enter your Email Address' />
        <input type='text' placeholder='Your Message' />
        <button type='submit'>Send</button>
      </form>
    </section>
  )
}

export default ContactUs
