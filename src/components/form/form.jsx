import styles from './form.module.scss';
import SearchIcon from '../../images/search-icon.svg';
import { useFormWithValidation } from '../../hooks/useFormWidthValidation';
import { updateUser } from '../../services/userData/action';
import { useDispatch } from 'react-redux';

const Form = () => {
    const dispatch = useDispatch();
    const { values, handleChange } = useFormWithValidation({userName: ''});

    function submitForm(evt) {
        evt.preventDefault();
        if(values.userName) {
            dispatch(updateUser(values.userName))
        };
    };

    return (
        <form className={ styles.form } onSubmit={ submitForm }>
            <img className={ styles.icon } src={ SearchIcon } />
            <div className={ styles.container }>
                <input className={ styles.input }
                    name='userName'
                    type="text" placeholder='Введите имя пользователя GitHub' 
                    onChange={ handleChange }
                />
                <button className={ `${styles.button }` } type='submit'>Найти</button>
            </div>
        </form>
    )
};

export default Form;