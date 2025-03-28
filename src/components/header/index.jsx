import styles from './header.module.scss';
import SunIcon from '../../images/sun-icon.svg';
import { useDispatch } from 'react-redux';
import { switchThemeActionCreator } from '../../services/app-options/action';

const Header = () => {
    const dispatch = useDispatch();
    
    function switchTheme() {
        dispatch(switchThemeActionCreator());
    };

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>devfinder</h1>
            <label className={styles.themeSwitcher} htmlFor='switch' onClick={ switchTheme }>
                light 
                <img className={ styles.icon } src={ SunIcon } />
            </label>
            <input className={ styles.switch } id='switch' type='checkbox' />
        </header>
    )
};

export default Header;