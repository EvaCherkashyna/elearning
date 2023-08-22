import { Icon } from '../../images/services'

import styles from "./servicesCard.module.scss"

const ServiceCard = ({ service }) => {

  return (
    <article className={styles.container}>
      <div className={styles.icon_container}>
        <Icon service={service} />
      </div>
      <h3 className={styles.title}>{service.occupation}</h3>
      <p className={`${styles.description} ${styles[service.color]}`}>{service.description}</p>
    </article>
  )
}

export default ServiceCard

