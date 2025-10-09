import { type ComponentType } from "react";
import { Skeleton } from "../../components/Skeleton/Skeleton";

export default function withSkeleton<P extends object>(
  WrappedComponent: ComponentType<P>,
  type: "banner" | "item",
  count: number,
  direction: "row" | "column"
) {
  return function WithSkeleton(props: P & { isLoading: boolean }) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <WrappedComponent {...(restProps as P)} />;
  };
}
