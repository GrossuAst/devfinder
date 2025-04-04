import styles from './activity-info.module.scss';
import { useSelector, shallowEqual } from 'react-redux';

const ActivityInfo = () => {
    const { user } = useSelector((store) => ({
        user: store.user.user
    }), shallowEqual);
    
    return (
        <div className={ styles.activityInfo }>
            <h3 className={ styles.title }>This profile has o bio</h3>
            <div>
                <ul className={ styles.list }>
                    <li className={ styles.listItem }>
                        <h6 className={ styles.itemTitle }>Public repos</h6>
                        <p className={ styles.activityValue }>{ user.public_repos }</p>
                    </li>
                    <li className={ styles.listItem }>
                        <h6 className={ styles.itemTitle }>Followers</h6>
                        <p className={ styles.activityValue }>{ user.followers }</p>
                    </li>
                    <li className={ styles.listItem }>
                        <h6 className={ styles.itemTitle }>Following</h6>
                        <p className={ styles.activityValue }>{ user.following }</p>
                    </li>
                </ul>
                <div className={ styles.social }>
                    
                </div>
            </div>
        </div>
    );
};

export default ActivityInfo;