import React, { useState, useEffect } from 'react'
import styles from "./slider.module.scss"


const Slider = ({ cards }) => {
  const [current, setCurrent] = useState(0)
  const [firstSlider, setFirstSlider] = useState([])
  const [secondSlider, setSecondSlider] = useState([])

  useEffect(() => {
    setTimeout(() => {
      const next = (current == secondSlider.length - 1 ? 0 : current + 1);
      setCurrent(next);
    }, 2000)
  });
  
  useEffect(() => {
    const firstSlider = cards.filter((_, i) => i == 0 || i % 2 == 0)
    const secondSlider = cards.filter((_, i) => i == 1 || i % 2 == 1)
    setFirstSlider(firstSlider)
    setSecondSlider(secondSlider)
  }, []);

  return (
    <div className={styles.container}>
      <div id="slider" className={styles.slider_wrapper}  >
             {firstSlider?.map((card, i) => {

        return ( <div
            id={`${i}`}
            className={i == current ? `${styles.card} ${styles.card_active}` : `${styles.card}`}
            key={i}>
            <img className={styles.card_image} src={card.image} />
            <div className={styles.card_overlay} style={{ background: `${card.color}` }}>
              <h2 className={styles.card_title}>
                {card.title}
              </h2>
            </div>
          </div>)
        })}
        {secondSlider?.map((card, i) => 
          <div
            id={`${5 - i}`}
            className={i == current ? `${styles.card_second} ${styles.card} ${styles.card_active}` : `${styles.card} ${styles.card_second}`}
            key={i + 1}>
            {i != 2 && <img className={styles.card_image} src={card.image} />}
            <div
              className={styles.card_overlay}
              style={{ background: `${card.color}` }}
            >
              {i == 2 && <img className={styles.card_envelope} src={card.image} />}
              <h2 className={styles.card_title}>
                {card.title}
              </h2>
            </div>
          </div>
        )}
      </div>

      <ul className={styles.card_pagination}>
        {secondSlider?.map((page, i) => {
          return <li onClick={() => setCurrent(i)} className={i == current ? `${styles.pagination_dot} ${styles.pagination_dot_active}` : `${styles.pagination_dot}`}></li>
        })}
      </ul>

    </div>
  )
}

export default Slider


