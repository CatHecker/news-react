import styles from "./styles.module.css";
import { CATEGORIES } from "../../constants/constants.ts";

type CategoriesType = {
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
};

export const Categories = ({
  setSelectedCategory,
  selectedCategory,
}: CategoriesType) => {
  return (
    <div className={styles.categories}>
      <button
        onClick={() => setSelectedCategory("")}
        className={selectedCategory === "" ? styles.active : styles.item}
      >
        All
      </button>
      {CATEGORIES.map((category: string) => {
        return (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category ? styles.active : styles.item
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
