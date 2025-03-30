import styles from './social.module.scss';
import LocationIconDarkTheme from '../../images/location-icon-theme-dark.svg';
import LocationIconDarkThemeUnactive from '../../images/location-icon-theme-dark-unactive.svg';
import TwitterIconDarkTheme from '../../images/twitter-icon-theme-dark.svg';
import TwitterIconDarkThemeUnactive from '../../images/twitter-icon-theme-dark-unactive.svg';
import LinkIconDarkTheme from '../../images/link-icon-theme-dark.svg';
import LinkIconDarkThemeUnactive from '../../images/link-icon-theme-dark-unactive.svg';
import CompanyIconDarkTheme from '../../images/company-icon-theme-dark.svg';
import CompanyIconDarkThemeUnactive from '../../images/company-icon-theme-dark-unactive.svg';
import { useSelector, shallowEqual } from 'react-redux';

const Social = () => {
    const plug = 'Not Available';

    const { user } = useSelector((store) => ({
        user: store.user.user
    }), shallowEqual);

    return (        
        //     1 location
        //     2 twitter_username
        //     3 blog
        //     4 company
        // <div>
            <ul className={ styles.list }>
                <li className={ styles.listItem }>
                    <img src={ user.location ? LocationIconDarkTheme : LocationIconDarkThemeUnactive } className={ styles.icon } />
                    <p className={ `${ styles.textValue } ${ !user.location && styles.textValueUnactive }` }>
                        { user.location ? user.location : plug }
                    </p>
                </li>
                <li className={ styles.listItem }>
                    <img src={ user.twitter_username ? TwitterIconDarkTheme : TwitterIconDarkThemeUnactive } className={ styles.icon } />
                    <p className={ `${ styles.textValue } ${ !user.twitter_username && styles.textValueUnactive }` }>
                        { user.twitter_username ? user.twitter_username : plug }
                    </p>
                </li>
                <li className={ styles.listItem }>
                    <img src={ user.blog ? LinkIconDarkTheme : LinkIconDarkThemeUnactive } className={ styles.icon } />
                    <p className={ `${ styles.textValue } ${ !user.blog && styles.textValueUnactive }` }>
                        { user.blog ? user.blog : plug }
                    </p>
                </li>
                <li className={ styles.listItem }>
                    <img src={ user.company ? CompanyIconDarkTheme : CompanyIconDarkThemeUnactive } className={ styles.icon } />
                    <p className={ `${ styles.textValue } ${ !user.company && styles.textValueUnactive }` }>
                        { user.company ? user.company : plug }
                    </p>
                </li>
            </ul>
        // </div>
    )
};

export default Social;