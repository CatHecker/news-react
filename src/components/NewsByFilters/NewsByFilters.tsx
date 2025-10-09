import { getAllNews } from "../../../api/apiNews";
import { PAGE_SIZE } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import NewsListWithSkeleton from "../NewsList/NewsList";
import { PaginationWrapper } from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";

export const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getAllNews, {
    ...filters,
    keywords: debouncedKeywords,
  });
  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <PaginationWrapper
        top={true}
        bottom={true}
        totalResults={data?.totalResults || 0}
        currentPage={filters.page_number}
        setCurrentPage={(page_number) => {
          changeFilter("page_number", page_number);
        }}
      >
        <NewsListWithSkeleton isLoading={isLoading} news={data?.articles} />
      </PaginationWrapper>
    </section>
  );
};
