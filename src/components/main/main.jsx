import styles from './main.module.scss';
import Form from '../form/form';
import UserInfo from '../user-info/user-info';

const Main = () => {
    return (
        <main className={ styles.main }>
            <Form />
            <UserInfo />
        </main>
    )
};

export default Main;