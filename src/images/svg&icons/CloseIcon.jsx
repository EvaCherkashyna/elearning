import React from 'react'
import styles from "./svg.module.scss"
const CloseIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path className={styles.icon} d="M5 5L9 9M5 5L1 1M5 5L1 9M5 5L9 1" stroke="#343434" stroke-width="1.14286" stroke-linecap="round" />
    </svg>
  )
}

export default CloseIcon
