import searchIcon from '@assets/icons/search.svg';
import Button from '../Button/Button';

import styles from './Search.module.scss';

const Search = ({ placeholder }) => {
    return <div className={styles.container}>
        <div className={styles.inputContainer}>
            <input type="text" placeholder={placeholder} className={styles.input}/>
            <img src={searchIcon.src} alt="search icon" className={styles.icon} />
        </div>
        <Button styleClass="green" style={{width: "100%"}}>Search</Button>
    </div>
}

export default Search;