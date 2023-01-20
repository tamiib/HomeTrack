import image from "@assets/images/houses/image-1.png";
import heartIcon from "@assets/icons/heart.svg";
import Image from "next/legacy/image";

import styles from './Card.module.scss';
import Button from "../Button/Button";

const Card = ({location, title, status }) => {
    return <div className={styles.container}>
        <div className={styles.topContainer}>
            <div className={styles.status}>{status}</div>
            <img src={heartIcon.src} alt="Heart icon" className={styles.icon} width="24px" height="24px"/>
        </div>
        <div className={styles.image}>
            <Image src={image.src} alt="House image" layout="responsive" width="327px" height="200px"/>
        </div>
        <div className={styles.content}>
            <div className={styles.titleContainer}>
                <p className={styles.location}>{location}</p>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <div className={styles.info}>
                <p className={styles.price}>2.000.000€</p>
                <Button styleClass="lightGreen">Details</Button>
            </div>
        </div>
    </div>
}

export default Card;