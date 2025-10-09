import { useState } from "react";

export type FiltersType = {
  page_number: number;
  page_size: number;
  keywords: string;
};

export const useFilters = (initialFilters: FiltersType) => {
  const [filters, setFilters] = useState(initialFilters);

  const changeFilter = <K extends keyof FiltersType>(
    key: K,
    value: FiltersType[K]
  ) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
