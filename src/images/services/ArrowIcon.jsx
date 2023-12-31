import React from 'react'
import "./services.scss"
const ArrowIcon = ({ outline,rotate }) => {
  return (
    < div className={`arrow_icon ${outline && "outline"} ${rotate&&"rotate"}`}>
      <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4L1 7L4 4ZM4 4L0.999999 1L4 4Z" fill="#343434" />
        <path d="M1 7L4 4L0.999999 1" stroke="#343434" stroke-width="1.2" stroke-linecap="round" />
      </svg>
    </div>
  )
}

export default ArrowIcon
