import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import type { NewsType } from "../../pages/main/Main";
import styles from "./styles.module.css";

// type sourceType = {
//   id: string;
//   name: string;
// };

export const NewsItem = ({
  urlToImage,
  title,
  publishedAt,
  author,
}: NewsType) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${urlToImage})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(new Date(publishedAt))} by {author}
        </p>
      </div>
    </li>
  );
};
