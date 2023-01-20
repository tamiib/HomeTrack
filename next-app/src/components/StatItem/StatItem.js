import styles from './StatItem.module.scss';

const StatItem = ({ value, measure, description }) => {
    return <div className={styles.container}>
        <div className={styles.value}>{value}</div>
        <div className={styles.measure}>{measure}</div>
        <p>{description}</p>
    </div>
}

export default StatItem;