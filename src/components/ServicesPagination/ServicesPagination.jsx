

import React, { useState } from 'react';
import ServiceCard from '../ServicesCard/ServiceCard'
import styles from "./servicesPagination.module.scss"
import { NextIcon } from '../../images/services';
import { UseSelector, useDispatch, useSelector } from 'react-redux/es/hooks/useSelector';

const itemsPerPage = 4; // Number of items to show per page

const ServicesPagination = ({services}) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const services = useSelector(state => state.services.services)
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentServices = services.slice(firstIndex, lastIndex);

  const totalPages = 3
  // Math.ceil(services.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handlePreviousPage = () => {
    setCurrentPage(prev => prev - 1);
  }
  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  }
  return (
    <section>
      <div className={styles.cards_container}>
        {currentServices.map((service, index) => (
          <ServiceCard service={service} />
        ))}
      </div>


      <div className={styles.btn_container}>
        <button className={styles.btn}
          disabled={currentPage == 1}
          onClick={handlePreviousPage}

        >

          <NextIcon type="previous" />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={`${styles.page} ${currentPage == index + 1 && styles.active}`}
            key={index}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={styles.btn}
          onClick={handleNextPage}
          disabled={currentPage == totalPages}

        >
          <NextIcon type="next" />
        </button>
      </div>
    </section>
  );
};

export default ServicesPagination;


// const ServicesPagination = ({ services }) => {

//   return (
//     <div>
//     <ul className=''>
//       {services?.map((service, index) => <li key={index} >
//         <ServiceCard service={service} />
//       </li>)}
//     </ul>
//     </div>
//   )
// }
