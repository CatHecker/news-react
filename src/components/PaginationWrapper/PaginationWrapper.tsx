import type { ReactNode } from "react";
import { Pagination, type PaginationPropsType } from "../Pagination/Pagination";

type PaginationWrapperPropsType = {
  top?: boolean;
  bottom?: boolean;
  children: ReactNode;
} & PaginationPropsType;

export const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: PaginationWrapperPropsType) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};
