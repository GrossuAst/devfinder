import styles from './error-message.module.scss';
import { useSelector, shallowEqual } from 'react-redux';

const ErrorMessage = () => {
    const { message } = useSelector((store) => (
        { message: store.user.error }
    ), shallowEqual);
    return (
        <p className={ styles.message }>
            { message && message }
        </p>
    )
};

export default ErrorMessage;