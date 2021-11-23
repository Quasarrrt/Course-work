import { Link } from 'react-router-dom';
//import Navigation from '../Navigation/Navigation';
import styles from './AppHeader.module.css';

function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                {/*<Navigation />*/}
                <Link to="/">
                    <img src='../../images/logo.svg' alt='logo'/>
                </Link>
            </div>
        </header>
    );
}

export default AppHeader;