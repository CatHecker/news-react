import { useEffect, useState } from "react";
import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../../api/apiNews";
import { NewsList } from "../../components/NewsList/NewsList";

export type NewsType = {
  author: string;
  //content: string;
  //description: string;
  publishedAt: string;
  //source: sourceType;
  title: string;
  //url: string;
  urlToImage: string;
};

export const Main = () => {
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNews();
        await setNews(res.articles);
        console.log(res.articles);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news && news.length > 0 ? (
        <NewsBanner
          urlToImage={news[0].urlToImage}
          title={news[0].title}
          publishedAt={news[0].publishedAt}
          author={news[0].author}
        />
      ) : null}

      <NewsList news={news} />
    </main>
  );
};
