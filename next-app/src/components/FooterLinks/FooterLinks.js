import { LINKS_GROUPS } from "./constants";
import LinksGroup from "./LinksGroup/LinksGroup";
import logoLight from "@assets/images/logo-light.png";

import Image from "next/image";

import styles from "./FooterLinks.module.scss";

const FooterLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Image
          width="162.76px"
          height="26.61px"
          src={logoLight}
          alt="HomeTrack Logo"
        />
        <p className={styles.description}>
          Design amazing digital experiences that create more happy in the world
        </p>
      </div>
      <div className={styles.linksContainer}>
        {LINKS_GROUPS.map((group) => (
          <LinksGroup linksGroup={group} key={`group-${group.headLink.label}`}/>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
