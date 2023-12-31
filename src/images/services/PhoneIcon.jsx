import React from 'react'
import "./services.scss"
const PhoneIcon = ({ classname }) => {
  return (
    <div className={`icon_unique_container ${classname}`}>
      <svg width="39" height="57" viewBox="0 0 39 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className={`${classname}`} x="1.27411" y="1.77386" width="35.6792" height="53.1547" rx="6.18925" stroke="white" stroke-width="2.18444" />
        <line className={`${classname}`} x1="13.6525" y1="6.14264" x2="24.5747" y2="6.14264" stroke="white" stroke-width="2.18444" stroke-linecap="round" />
        <line className={`${classname}`} x1="0.910156" y1="10.5118" x2="38.0456" y2="10.5118" stroke="white" stroke-width="2.18444" />
        <line className={`${classname}`} x1="0.182129" y1="44.7344" x2="37.3176" y2="44.7344" stroke="white" stroke-width="2.18444" />
        <circle className={`${classname}`} cx="19.114" cy="50.1958" r="2.91259" fill="white" />
      </svg>
    </div>

  )
}

export default PhoneIcon
