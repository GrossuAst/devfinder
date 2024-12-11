import styles from './header.module.scss';
import SunIcon from '../../images/sun-icon.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>devfinder</h1>
            <label className={styles.themeSwitcher} htmlFor='switch'>
                light 
                <img className={ styles.icon } src={ SunIcon } />
            </label>
            <input className={ styles.switch } id='switch' type='checkbox' />
        </header>
    )
};

export default Header;