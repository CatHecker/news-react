import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import type { NewsType } from "../../pages/main/Main";
import { CustomImage } from "../CustomImage/CustomImage";
import styles from "./styles.module.css";

// type sourceType = {
//   id: string;
//   name: string;
// };



export const NewsBanner = ({
  urlToImage,
  title,
  publishedAt,
  author,
}: NewsType) => {
  return (
    <div className={styles.banner}>
      <CustomImage image={urlToImage} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(new Date(publishedAt))} by {author}
      </p>
    </div>
  );
};
