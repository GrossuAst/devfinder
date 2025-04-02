import styles from './main.module.scss';
import { useEffect } from 'react';
import Form from '../form';
import UserInfo from '../user-info';
// import Preloader from '../preloader';
import { mokUser } from '../../utils/constants';
import { updateUser } from '../../services/user-data/action';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const Main = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((store) => (
        { isLoading: store.user.isLoading }
    ), shallowEqual);

    useEffect(() => {
        dispatch(updateUser(mokUser));
    }, []);

    return (
        <main className={ styles.main }>
            <Form />
            {/* {
                !isLoading ? <UserInfo /> : <Preloader />
            } */}
            <UserInfo />
        </main>
    )
};

export default Main;