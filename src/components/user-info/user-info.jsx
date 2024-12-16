import styles from './user-info.module.scss';
import { useSelector, shallowEqual } from 'react-redux';

const UserInfo = () => {
    const { user } = useSelector((store) => ({
        user: store.user.user
    }), shallowEqual);

    return (
        <section className={ styles.content }>
            <div className={ styles.mainInfo }>
                <img src={ user.avatar_url } className={ styles.avatar } />
                <div className={ styles.container } >
                    <div className={ styles.nameContainer }>
                        <p className={ styles.name }>The Octocat</p>
                        <a className={ styles.loginLink } href={ user.html_url } target="_blank">{`${'@' + user.login}`}</a>
                    </div>
                    <p className={ styles.joined }>
                        { `${'Joined' + " " + "25" + " " + 'Jan 2011'}` }
                    </p>
                </div>
            </div>
        </section>
    )
};

export default UserInfo;