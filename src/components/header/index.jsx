import styles from './header.module.scss';
import commonStyles from '../../styles/common.module.scss';
import SunIcon from '../../images/sun-icon.svg';
import MoonIcon from '../../images/moon-icon.svg';
import { useDispatch } from 'react-redux';
import { switchThemeActionCreator } from '../../services/app-options/action';
import { useSelector, shallowEqual } from 'react-redux';

const Header = () => {
    const { theme } = useSelector((store) => (
        { theme: store.options.theme }
    ), shallowEqual);
    const dispatch = useDispatch();
    
    function switchTheme() {
        dispatch(switchThemeActionCreator());
    };

    return (
        <header className={ `${styles.header} ${ theme === 'dark' ? commonStyles.primaryTextThemeDark : commonStyles.primaryTextThemeLight }` }>
            <h1 className={styles.title}>devfinder</h1>
            <label className={styles.themeSwitcher} htmlFor='switch' onClick={ switchTheme }>
                light 
                <img className={ styles.icon } src={ theme === 'dark' ? SunIcon : MoonIcon } />
            </label>
            <input className={ styles.switch } id='switch' type='checkbox' />
        </header>
    )
};

export default Header;