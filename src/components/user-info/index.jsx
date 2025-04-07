import styles from './user-info.module.scss';
import commonStyles from '../../styles/common.module.scss';
import { useSelector, shallowEqual } from 'react-redux';
import ActivityInfo from '../activity-info';
import Social from '../social';
import ErrorMessage from '../error-message';
import Preloader from '../ui/preloader';

const UserInfo = () => {
    const { user, isLoading, feedFailed, errorMessage, theme } = useSelector((store) => ({
        user: store.user.user,
        isLoading: store.user.isLoading,
        feedFailed: store.user.feedFailed,
        errorMessage: store.user.message,
        theme: store.options.theme
    }), shallowEqual);

    function formatDate(source) {
        const date = new Date(source);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-GB', options);
        const result = `Joined ${formattedDate}`;
        return result;
    };

    return (
        <section className={ `${styles.content} ${ theme === 'dark' ? commonStyles.backgroundThemeDark : commonStyles.backgroundThemeLight }` }>
            {
                !isLoading && !feedFailed ? 
                (
                    <>
                        <div className={ `${styles.mainInfo} ${ theme === 'dark' ? commonStyles.primaryTextThemeDark : commonStyles.primaryTextThemeLight }` }>
                            <img src={ user.avatar_url } className={ styles.avatar } />
                            <div className={ styles.container } >
                            <div className={ styles.nameContainer }>
                                <p className={ styles.name }>
                                    {user.name}
                                </p>
                                <a className={ styles.loginLink } href={ user.html_url } target="_blank">
                                    {`${'@' + user.login}`}
                                </a>
                            </div>
                                <p className={ styles.joined }>
                                    { formatDate(user.created_at) }
                                </p>
                            </div>
                        </div>
                        <ActivityInfo />
                        <Social />
                    </>
                ) : isLoading ?
                <Preloader /> : feedFailed && <ErrorMessage />
            }
        </section>
    )
};

export default UserInfo;