import Image from 'next/legacy/image';
import StatItem from '../StatItem/StatItem';
import { STATS } from './constants';

import statsImage from "@assets/images/home/stats.png";
import statsImageMobile from "@assets/images/home/stats-mobile.png";

import styles from './Statistics.module.scss';
import { useMedia } from 'use-media';

const Statistics = () => {
    const desktopView = useMedia({minWidth: 1068});
    const imageWidth = desktopView ? "512px" : "372px";
    const imageHeight = desktopView ? "560px" : "262px";

    return <section id="statistics-section" className={styles.section}>
        <div className={styles.titleContainer}>
            <h2>Who choose HomeTrack?</h2>
            <p>Our team of dedicated professionals have years of experience in the industry and are committed to finding you the perfect space that meets all of your needs. With HomeTrack, you can trust that you are getting the best services and advice, so you can be confident in your decision.</p>
        </div>
        <div className={styles.content}>
            <ul className={styles.stats}>
                {STATS.map(stat => <StatItem {...stat} key={stat.measure}/>)}
            </ul>
            <div className={styles.image}>
                <Image src={desktopView ? statsImage.src : statsImageMobile.src} alt="Stats image" layout="responsive" width={imageWidth} height={imageHeight} />
            </div>
        </div>
    </section>
}

export default Statistics;