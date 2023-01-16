import Link from "next/link";
import Button from "../Button/Button";
import { LINKS } from "./constats";

import styles from "./Navigation.module.scss";

const Navigation = ({ activeTab }) => {
  return (
    <div className={styles.navigation}>
      <div />
      <ul className={styles.navLinks}>
        {LINKS.map((link) => (
          <li>
            <Link href={link.to} className={styles.navLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.btnsContainer}>
        <Button to="/sign-up">Sign Up</Button>
        <Button to="/log-in" styleClass="lightGreen">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
