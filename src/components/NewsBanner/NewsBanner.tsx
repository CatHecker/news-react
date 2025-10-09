import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import type { NewsType } from "../../pages/main/Main";
import { CustomImage } from "../CustomImage/CustomImage";
import styles from "./styles.module.css";

type NewsBannerPropsType = {
  news: NewsType;
};

export const NewsBanner = ({ news }: NewsBannerPropsType) => {
  return news ? (
    <div className={styles.banner}>
      <CustomImage image={news.urlToImage} />
      <h3 className={styles.title}>{news.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(new Date(news.publishedAt))} by {news.author}
      </p>
    </div>
  ) : null;
};
