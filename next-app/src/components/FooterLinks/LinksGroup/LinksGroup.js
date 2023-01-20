import Link from "next/link";

import styles from "./LinksGroup.module.scss";

const LinksGroup = ({ linksGroup }) => {
  return (
    <div className={styles.container}>
      <Link href={linksGroup.headLink.to} className={styles.headLink}>
        {linksGroup.headLink.label}
      </Link>
      <div className={styles.otherLinks}>
        {linksGroup.otherLinks.map((link) => (
          <Link className={styles.otherLink} href={link.to} key={`other-link-${link.label}`}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinksGroup;
