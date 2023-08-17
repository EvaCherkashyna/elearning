import React from 'react'
import "./services.scss"
const NextIcon = ({ type }) => {
  return (
    <div className={`${type}`}>
      <svg className='next_icon' xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 10 16" fill="none">
        <path className={`${type}`} d="M2 8L8 2L2 8ZM2 8L8 14L2 8Z" fill="white" />
        <path className={`${type}`} d="M8 2L2 8L8 14" stroke="#343434" stroke-width="2.25" stroke-linecap="round" />
      </svg>
    </div>
  )
}

export default NextIcon
