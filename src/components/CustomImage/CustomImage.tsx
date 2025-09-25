import styles from "./styles.module.css";

type cusImage = {
  image: string;
};

export const CustomImage = ({ image }: cusImage) => {
  console.log(image);
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
};
