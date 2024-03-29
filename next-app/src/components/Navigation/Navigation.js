import clsx from "clsx";
import Link from "next/link";
import Button from "../Button/Button";
import { LINKS } from "./constats";

import styles from "./Navigation.module.scss";

const Navigation = ({ activeTab }) => {
  return (
    <div className={styles.navigation}>
      <div />
      <ul className={styles.navLinks}>
        {LINKS.map((link, index) => (
          <li key={`nav-link__${index}`}>
            <Link
              href={link.to}
              className={clsx({
                [styles.navLink]: true,
                [styles.active]: link.label.toLowerCase() === activeTab,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.btnsContainer}>
        <Button to="/signup">Sign Up</Button>
        <Button to="/login" styleClass="lightGreen">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
