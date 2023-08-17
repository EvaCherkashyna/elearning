import React from 'react'
import "./services.scss"
const ComputerIcon = ({ classname }) => {

  return (
    <div className={`icon_unique_container ${classname}`}>
      <svg width="55" height="49" viewBox="0 0 55 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className={` ${classname}`} x="1.52217" y="1.38594" width="51.9557" height="40.6063" rx="2.49103" stroke="white" stroke-width="2.13517" />
        <line className={` ${classname}`} x1="0.45459" y1="32.0193" x2="54.5455" y2="32.0193" stroke="white" stroke-width="2.13517" />
        <ellipse className={` ${classname}`} cx="27.5002" cy="37.3611" rx="2.84689" ry="2.84943" fill="white" />
        <line className={` ${classname}`} x1="27.5001" y1="43.0601" x2="27.5001" y2="45.9095" stroke="white" stroke-width="1.42344" />
        <line className={` ${classname}`} x1="44.5815" y1="46.9773" x2="10.4189" y2="46.9773" stroke="white" stroke-width="2.13517" />
      </svg>
    </div>

  )
}

export default ComputerIcon
