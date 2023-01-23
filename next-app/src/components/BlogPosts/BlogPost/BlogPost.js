import Button from "@/components/Button/Button";
import Image from "next/legacy/image";
import styles from "./BlogPost.module.scss";

const BlogPost = ({ title, date, description, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={image.src}
          layout="responsive"
          width={`${image.width}px`}
          height={`${image.height}px`}
          alt="Blog image"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <div className="subtitle">{date}</div>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.button}>
          <Button styleClass="gray">Read more</Button>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default BlogPost;
