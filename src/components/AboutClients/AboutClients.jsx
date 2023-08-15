import React from 'react'
const image = require("../../images/aboutClients.jpg")
const AboutClients = () => {
  return (
    <section>
      <div>
      </div>
      <h3>We know learning inside and out </h3>
      <img src={image} alt="peoples" />
      <p>We pride ourselves on developing training strategies with the learners in mind, ensuring your time and resources are well utilized.</p>
      <ul>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M6.25 13.75L13.75 21.25L26.25 8.75" stroke="#E7D08C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg><p>We start each project with a careful analysiys of your
            learning needs</p>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M6.25 13.75L13.75 21.25L26.25 8.75" stroke="#E7D08C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg><p>We constantly look for ways to save your time and money while exceeding your expectations</p>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M6.25 13.75L13.75 21.25L26.25 8.75" stroke="#E7D08C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg><p>We don't stop working until you are satisfied with the products
            we deliver</p>
        </li>
      </ul>

    </section>
  )
}

export default AboutClients
