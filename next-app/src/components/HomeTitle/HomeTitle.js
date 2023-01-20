import Search from "../Search/Search";
import homeImage from "@assets/images/home/home.png";
import styles from "./HomeTitle.module.scss";
import Image from "next/legacy/image";

const HomeTitle = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>Find your dream home in Croatia</h1>
        <div className={styles.searchContainer}>
          <Search placeholder="Try: Villa with pool in Split" />
        </div>
        <div className={styles.image}>
          <Image
            src={homeImage.src}
            alt="trees image"
            layout="responsive"
            width="1185px"
            height="897px"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeTitle;
