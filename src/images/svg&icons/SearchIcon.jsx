import React from 'react'
import styles from "./svg.module.scss"

const SearchIco = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
      <g opacity="0.75">
        <path className={styles.icon} d="M10.9167 10.9166L18 18" stroke="#343434" stroke-width="1.7" stroke-linecap="round" />
        <path className={styles.icon} d="M10.6735 10.6736C12.8865 8.46064 12.8865 4.87271 10.6735 2.65973C8.46056 0.446756 4.87262 0.446756 2.65969 2.65973C0.446669 4.87271 0.446669 8.46064 2.65969 10.6736C4.87262 12.8866 8.46056 12.8866 10.6735 10.6736Z" stroke="#343434" stroke-width="1.7" stroke-linecap="round" />
      </g>
    </svg>
  )
}

export default SearchIco
