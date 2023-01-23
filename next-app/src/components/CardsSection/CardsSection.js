import { useMedia } from "use-media";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./CardsSection.module.scss";

const DUMMY_DATA = [
  {
    location: "Croatia, Ciovo",
    title: "6 new luxurious modern villa, for sale",
    status: "For sale",
  },
  {
    location: "Croatia, Ciovo",
    title: "6 new luxurious modern villa, for sale",
    status: "For sale",
  },
  {
    location: "Croatia, Ciovo",
    title: "6 new luxurious modern villa, for sale",
    status: "For sale",
  },
  {
    location: "Croatia, Ciovo",
    title: "6 new luxurious modern villa, for sale",
    status: "For sale",
  },
];

const CardsSection = ({ location, title }) => {
  const mobileView = useMedia({maxWidth: 1068});
  const buttonWidth = {width: mobileView ? "152px" : "fit-content"};

  return (
    <section id={`section-${title}`} className={styles.section}>
      <div className={styles.topContainer}>
        <div className={styles.text}>
          <div className="subtitle">{location.toUpperCase()}</div>
          <h2>{title}</h2>
        </div>
        <div className={styles.btnContainer}>
          <Button styleClass="gray" style={buttonWidth} className={styles.btn}>
            See more
          </Button>
        </div>
      </div>
      <ul className={styles.cards}>
        {DUMMY_DATA.map((house, index) => (
          <Card {...house} key={`${title}-house-${index}`}/>
        ))}
      </ul>
    </section>
  );
};

export default CardsSection;
