import styles from "./styles.module.css";

type SkeletonProps = {
  count: number;
  type: "banner" | "item";
  direction: "row" | "column";
};

export const Skeleton = ({
  count = 1,
  type = "banner",
  direction = "column",
}: SkeletonProps) => {
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === "column" ? styles.columnList : styles.rowList
          }
        >
          {Array.from({ length: count }).map((_, index) => {
            return (
              <li
                key={index}
                className={type === "banner" ? styles.banner : styles.item}
              ></li>
            );
          })}
        </ul>
      ) : (
        <li className={type === "banner" ? styles.banner : styles.item}></li>
      )}
    </>
  );
};
