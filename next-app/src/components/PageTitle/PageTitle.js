import clsx from "clsx";
import Image from "next/legacy/image";
import { useMedia } from "use-media";
import styles from "./PageTitle.module.scss";

const PageTitle = ({
  title,
  subtitle,
  description,
  desktopImage,
  mobileImage,
  styleClass,
}) => {
  const sectionStyle = clsx({
    [styles.section]: true,
    [styles[styleClass]]: !!styleClass,
  });
  const desktopView = useMedia({minWidth: 768})

  const image = desktopView ? desktopImage : mobileImage;
  return (
    <section id="page-title" className={sectionStyle}>
      <div className={styles.text}>
        <div className={styles.titleContainer}>
          <div className="subtitle">{subtitle.toUpperCase()}</div>
          <h1>{title}</h1>
        </div>
        <p>{description}</p>
      </div>
      <div className={styles.image} style={{maxWidth: `${desktopView ? `${image.width}px` : "100%"}`}}>
        <Image
          src={image.src}
          layout="responsive"
          width={`${image.width}px`}
          height={`${image.height}px`}
          className="realImage"
        />
      </div>
    </section>
  );
};

export default PageTitle;
