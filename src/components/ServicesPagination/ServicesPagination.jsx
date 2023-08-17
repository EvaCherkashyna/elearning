import React, { useEffect, useState } from 'react';

import ServiceCard from '../ServicesCard/ServiceCard'
import { NextIcon } from '../../images/services';

import styles from "./servicesPagination.module.scss"

const ServicesPagination = ({ services }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4; 
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const totalPages = services.length / 4 > 3 ? services.length / 4 : 3
  const activePages = Math.ceil(services.length / 4)

  const currentServices = services.slice(firstIndex, lastIndex);


  useEffect(() => {
    setCurrentPage(1)
  }, [services])

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handlePreviousPage = () => {
    setCurrentPage(prev => prev - 1);
  }
  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  }
  const renderPaginationButtons = () => {
    const buttons = [];
    const halfVisible = Math.floor(3 / 2);
    let start = Math.max(1, currentPage - halfVisible);
    let end = Math.min(totalPages, start + 3 - 1);

    if (end - start + 1 < 3) {
      start = Math.max(1, end - 3 + 1);
    }
    buttons.push(
      <button key="first" className={styles.btn}
        disabled={currentPage == 1 || currentPage >= activePages}
        onClick={handlePreviousPage}>
        <NextIcon type="previous" />
      </button>
    );


    for (let i = start; i <= end; i++) {
      buttons.push(
        <button className={`${styles.page} ${currentPage == i && styles.active}`}
          key={i}
          disabled={i > activePages}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }


    buttons.push(
      <button key="last" className={styles.btn}
        onClick={handleNextPage}
        disabled={currentPage == totalPages || currentPage >= activePages}
      >
        <NextIcon type="next" />
      </button>
    );
    return buttons;
  };
  
  return (
    <section>
      <div className={styles.cards_container}>
        {currentServices.map((service, index) => (
          <ServiceCard service={service} />
        ))}
      </div>
      <div className={styles.btn_container}>
        {renderPaginationButtons()}
      </div>

    </section>
  );
};

export default ServicesPagination;
