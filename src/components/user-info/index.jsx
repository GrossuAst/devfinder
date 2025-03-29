import styles from './user-info.module.scss';
import { useSelector, shallowEqual } from 'react-redux';
import ActivityInfo from '../activity-info';
import Social from '../social';

const UserInfo = () => {
    const { user } = useSelector((store) => ({
        user: store.user.user
    }), shallowEqual);

    function formatDate(source) {
        const date = new Date(source);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-GB', options);
        const result = `Joined ${formattedDate}`;
        return result;
    };

    return (
        <section className={ styles.content }>
            <div className={ styles.mainInfo }>
                <img src={ user.avatar_url } className={ styles.avatar } />
                <div className={ styles.container } >
                    <div className={ styles.nameContainer }>
                        <p className={ styles.name }>{user.name}</p>
                        <a className={ styles.loginLink } href={ user.html_url } target="_blank">{`${'@' + user.login}`}</a>
                    </div>
                    <p className={ styles.joined }>
                        { formatDate(user.created_at) }
                    </p>
                </div>
            </div>
            <ActivityInfo />
            <Social />
        </section>
    )
};

export default UserInfo;