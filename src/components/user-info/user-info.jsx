import styles from './user-info.module.scss';

const UserInfo = () => {
    return (
        <section className={ styles.content }>
            <div className={ styles.mainInfo }>
                <img className={ styles.avatar } />
                <div>
                    <div className={ styles.nameContainer }>
                        <p className={ styles.name }>The Octocat</p>
                        <p className={ styles.login }>{`${'@' + 'octocat'}`}</p>
                    </div>
                    <p className={ styles.joined }>
                        { `${'Joined' + " " + 'Jan 2011'}` }
                    </p>
                </div>
            </div>
        </section>
    )
};

export default UserInfo;