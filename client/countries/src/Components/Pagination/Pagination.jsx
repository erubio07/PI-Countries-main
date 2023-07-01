import React from "react";
import styles from "./Pagination.module.css";

function Pagination({
  itemsPerPage,
  currentPage,
  setCurrentPage,
  totalCountries,
}) {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalCountries / itemsPerPage);

  const maxVisiblePages = 5;
  const totalPagesInRange = Math.min(
    totalPages,
    currentPage + maxVisiblePages - 1
  );

  let startPage = currentPage;
  let endPage = totalPagesInRange;

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onCurrentPage = (e) => {
    setCurrentPage(e);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.buttonPrev}
        disabled={currentPage === 1}
        onClick={onPreviousPage}
      >
        Prev
      </button>
      <ul>
        {pageNumbers.map((p) => {
          return (
            <button
              key={p}
              onClick={() => onCurrentPage(p)}
              className={`${styles.button} ${
                p === currentPage ? styles.active : ""
              }`}
            >
              {p}
            </button>
          );
        })}
      </ul>
      <button
        className={styles.buttonNext}
        disabled={currentPage === 25}
        onClick={onNextPage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
