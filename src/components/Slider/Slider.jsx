import React, { useState, useEffect } from 'react'
import styles from "./slider.module.scss"


const Slider = ({ cards }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      const next = (current == cards.length - 1 ? 0 : current + 1);
      setCurrent(next);
    }, 2000)
  });

  return (
    <div className={styles.container}>
      <div div className={styles.slider_wrapper}  >
        {cards?.map((page, i) =>
          <>
            <div

              className={i == current ? `${styles.card} ${styles.card_active}` : `${styles.card}`}
              key={i}>
              <img className={styles.card_image} src={page[0].image} />
              <div className={styles.card_overlay} style={{ background: `${page[0].color}` }}>
                <h2 className={styles.card_title}>
                  {page[0].title}
                </h2>
              </div>
            </div>
            <div
              className={i == current ? `${styles.card_second} ${styles.card} ${styles.card_active}` : `${styles.card} ${styles.card_second}`}
              key={i + 1}>
              {i != 2 && <img className={styles.card_image} src={page[1].image} />}
              <div
                className={styles.card_overlay}
                style={{ background: `${page[1].color}` }}
              >
                {i == 2 && <img className={styles.card_envelope} src={page[1].image} />}
                <h2 className={styles.card_title}>
                  {page[1].title}
                </h2>
              </div>
            </div>
          </>
        )}
      </div>

      <ul className={styles.card_pagination}>
        {cards?.map((page, i) => {
          return <li onClick={() => setCurrent(i)} className={i == current ? `${styles.pagination_dot} ${styles.pagination_dot_active}` : `${styles.pagination_dot}`}></li>
        })}
      </ul>

    </div>
  )
}

export default Slider


