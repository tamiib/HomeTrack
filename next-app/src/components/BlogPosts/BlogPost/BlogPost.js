import Button from "@/components/Button/Button";
import Image from "next/legacy/image";
import styles from "./BlogPost.module.scss";

const BlogPost = ({ title, date, description, thumbnail }) => {
  const dateNumber = new Date(date);

  const formattedDate = dateNumber.toLocaleDateString("en-EN", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={thumbnail.url}
          layout="responsive"
          width={`${thumbnail.width}px`}
          height={`${thumbnail.height}px`}
          alt="Blog image"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <div className="subtitle">{formattedDate}</div>
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
