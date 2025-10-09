import { getNews } from "../../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import BannersListWithSkeleton from "../BannersList/BannersList";
import styles from "./styles.module.css";

export const LatestNews = () => {
  const { data, isLoading } = useFetch(getNews, {});
  return (
    <section className={styles.section}>
      <BannersListWithSkeleton
        banners={data && data.articles}
        isLoading={isLoading}
      />
    </section>
  );
};
