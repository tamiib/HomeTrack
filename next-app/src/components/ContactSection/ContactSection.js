import Button from "../Button/Button";
import styles from "./ContactSection.module.scss";

const ContactSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.title}>Lets talk</p>
        <p className={styles.description}>
          Let us provide the best services and advice, so you can be confident
          in your decision
        </p>
      </div>
      <div className={styles.btnsContainer}>
        <Button to="/about" styleClass="transparentGray">About us</Button>
        <Button to="/contact" styleClass="green">Contact us</Button>
      </div>
    </div>
  );
};

export default ContactSection;
