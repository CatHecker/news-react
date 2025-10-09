import type { FiltersType } from "../../helpers/hooks/useFilters";
import { Search } from "../Search/Search";
import styles from "./styles.module.css";

type NewsFiltersPropsType = {
  filters: FiltersType;
  changeFilter: <K extends keyof FiltersType>(
    key: K,
    value: FiltersType[K]
  ) => void;
};

export const NewsFilters = ({
  filters,
  changeFilter,
}: NewsFiltersPropsType) => {
  return (
    <div className={styles.filters}>
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          changeFilter("keywords", keywords);
        }}
      />
    </div>
  );
};
