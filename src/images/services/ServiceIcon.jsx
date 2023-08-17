import React from 'react'
import "./services.scss"
const ServiceIcon = ({ classname }) => {
  return (
    <div className={`icon_unique_container ${classname}`}>
      <svg width="59" height="47" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask className={` ${classname}`} id="path-1-inside-1_447_771" fill="white">
          <rect x="16.6165" y="0.0908203" width="41.4052" height="26.9638" rx="0.728751" />
        </mask>
        <rect className={` ${classname}`} x="16.6165" y="0.0908203" width="41.4052" height="26.9638" rx="0.728751" stroke="white" stroke-width="4.37251" mask="url(#path-1-inside-1_447_771)" />
        <path className={` ${classname}`} d="M13.6589 10.2935H10.321C9.91856 10.2935 9.59229 10.6197 9.59229 11.0222V35.4354C9.59229 35.8378 9.91856 36.1641 10.321 36.1641H49.5293C49.9318 36.1641 50.2581 35.8378 50.2581 35.4354V30.3341" stroke="white" stroke-width="2.18625" />
        <path className={` ${classname}`} d="M5.89544 19.0386H2.55761C2.15513 19.0386 1.82886 19.3648 1.82886 19.7673V44.1805C1.82886 44.583 2.15513 44.9092 2.55761 44.9092H41.7659C42.1684 44.9092 42.4946 44.583 42.4946 44.1805V39.0792" stroke="white" stroke-width="2.18625" />
      </svg>

    </div>
  )
}

export default ServiceIcon
