import styles from "./styles.module.css";

type PaginationType = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationType) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const MAX_PAGES_TO_SHOW = 10;
  const isOverflow = totalPages > MAX_PAGES_TO_SHOW + 1;

  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePrevPage}
        className={styles.arrow}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>

      <div className={styles.list}>
        {Array(Math.min(totalPages, MAX_PAGES_TO_SHOW))
          .fill(0)
          .map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                className={`${styles.pageNumber} ${
                  currentPage === pageNumber ? styles.choosenPage : ""
                }`}
                disabled={currentPage === pageNumber}
              >
                {pageNumber}
              </button>
            );
          })}

        {isOverflow && (
          <>
            <span className={styles.ellipsis}>...</span>
            <button
              onClick={() => handlePageClick(totalPages)}
              className={`${styles.pageNumber} ${
                currentPage === totalPages ? styles.choosenPage : ""
              }`}
              disabled={currentPage === totalPages}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button
        onClick={handleNextPage}
        className={styles.arrow}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};
