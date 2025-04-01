import styles from './main.module.scss';
import { useEffect } from 'react';
import Form from '../form';
import UserInfo from '../user-info';
import { mokUser } from '../../utils/constants';
import { updateUser } from '../../services/user-data/action';
import { useDispatch } from 'react-redux';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateUser(mokUser));
    }, []);

    return (
        <main className={ styles.main }>
            <Form />
            <UserInfo />
        </main>
    )
};

export default Main;