import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";

export type PaginationPropsType = {
  totalResults: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export const Pagination = ({
  totalResults,
  currentPage,
  setCurrentPage,
}: PaginationPropsType) => {
  const { isDark } = useTheme();
  const totalPages = Math.floor(totalResults / 10 + 1);
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
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
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
