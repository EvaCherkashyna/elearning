import React from 'react'
const image = require("../../images/instructionalDesign.jpg")

const InstructionalDesign = () => {
  return (
    <section>
      <h2>Instructional Design</h2>
      <div>
        <img src={image} alt="peoples" />
        <h3>We know learning inside and out </h3>
        <p>Our instructional design team will work hard to align your business goals with your learning objectives to ensure the training supports your business strategies.</p>
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M6.25 13.75L13.75 21.25L26.25 8.75" stroke="#E7D08C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg><p>Each project requires a unique approach, and we are ready for the challenge</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M6.25 13.75L13.75 21.25L26.25 8.75" stroke="#E7D08C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg><p>Our expertise in the training and development industry will make your project a success</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M6.25 13.75L13.75 21.25L26.25 8.75" stroke="#E7D08C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg><p>Your goals and deadlines are our priority</p>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default InstructionalDesign
