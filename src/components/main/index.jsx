import styles from './main.module.scss';
import Form from '../form';
import UserInfo from '../user-info';

const Main = () => {
    return (
        <main className={ styles.main }>
            <Form />
            <UserInfo />
        </main>
    )
};

export default Main;