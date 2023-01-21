import Search from '../Search/Search';
import styles from './SearchSection.module.scss';

const SearchSection = ({ placeholder }) => {
    return <section id="search-section" className={styles.section}>
        <div className={styles.wrapper}>
            <Search placeholder={placeholder} />
        </div>
    </section>
}

export default SearchSection;