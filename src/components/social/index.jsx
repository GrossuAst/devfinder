import styles from './social.module.scss';
import LocationIconeDarkTheme from '../../images/location-icon-theme-dark.svg';
import { useSelector, shallowEqual } from 'react-redux';

const Social = () => {
    const { user } = useSelector((store) => ({
        user: store.user.user
    }), shallowEqual);

    return (        
        //     1 location
        //     2 twitter_username
        //     3 blog
        //     4 company
        <div>
            <ul className={ styles.list }>
                <li>
                    <img src={ LocationIconeDarkTheme } />
                    <p>
                        San Francisco
                    </p>
                </li>
            </ul>
        </div>
    )
};

export default Social;