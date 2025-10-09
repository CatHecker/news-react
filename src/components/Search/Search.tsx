import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";

type SearchType = {
  keywords: string;
  setKeywords: (newVal: string) => void;
};

export const Search = ({ keywords, setKeywords }: SearchType) => {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        placeholder="Search"
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};
