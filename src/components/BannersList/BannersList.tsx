import withSkeleton from "../../helpers/hoc/withSkeleton";
import type { NewsType } from "../../pages/main/Main";
import { NewsBanner } from "../NewsBanner/NewsBanner";
import styles from "./styles.module.css";

type NewsBannerPropsType = {
  banners: NewsType[];
};

const BannersList = ({ banners }: NewsBannerPropsType) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner, ind) => {
        return <NewsBanner key={ind} news={banner} />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");
export default BannersListWithSkeleton;
