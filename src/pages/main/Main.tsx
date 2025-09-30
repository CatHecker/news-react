import { useEffect, useState } from "react";
import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../../api/apiNews";
import { NewsList } from "../../components/NewsList/NewsList";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { Pagination } from "../../components/Pagination/Pagination";

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
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const PAGE_SIZE = 10;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const res = await getNews(currentPage, PAGE_SIZE);
        await setNews(res.articles);
        await setTotalPages(Math.floor(res.totalResults / 10 + 1));
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, [currentPage]);
  return (
    <main className={styles.main}>
      {news && news.length > 0 && !isLoading ? (
        <NewsBanner
          urlToImage={news[0].urlToImage}
          title={news[0].title}
          publishedAt={news[0].publishedAt}
          author={news[0].author}
        />
      ) : (
        <Skeleton count={1} type="banner" />
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {isLoading ? (
        <Skeleton count={10} type="item" />
      ) : (
        <NewsList news={news} />
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};
