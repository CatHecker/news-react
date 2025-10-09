import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";
import dark from "../../assets/dark_theme.webp";
import light from "../../assets/light_theme.png";
import { useTheme } from "../../context/ThemeContext";

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>News-react</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <img
        src={isDark ? light : dark}
        width={30}
        alt="theme"
        onClick={toggleTheme}
        style={{ backgroundColor: "transparent" }}
      />
    </header>
  );
};
