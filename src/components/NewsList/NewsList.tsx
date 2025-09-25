import type { NewsType } from "../../pages/main/Main";
import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./styles.module.css";



type NewsListType= {
  news: NewsType[]
};

export const NewsList = ({ news }: NewsListType) => {
  return (
    <ul className={styles.list}>
      {news.map((item, ind) => {
        return (
        <NewsItem      
          key={ind}     
          urlToImage={item.urlToImage}
          title={item.title}
          publishedAt={item.publishedAt}
          author={item.author}/>
            )
      })}
    </ul>
  );
};
