import instagram from '@assets/icons/instagram.svg';
import facebook from '@assets/icons/facebook.svg';

import Link from 'next/link';

import styles from "./CopyRight.module.scss";

const CopyRight = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        &#169; {`${new Date().getFullYear()}`} HomeTrack. All rights reserved.
      </p>
      <div className={styles.icons}>
        <Link href="/" className={styles.icon}><img src={instagram.src} alt="Instagram icon" /></Link>
        <Link href="/" className={styles.icon}><img src={facebook.src} alt="Facebook icon"/></Link>
      </div>
    </div>
  );
};

export default CopyRight;
