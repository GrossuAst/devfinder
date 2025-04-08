import styles from './form.module.scss';
import commonStyles from '../../styles/common.module.scss';
import SearchIcon from '../../images/search-icon.svg';
import { useFormWithValidation } from '../../hooks/useFormWidthValidation';
import { updateUser } from '../../services/user-data/action';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const Form = () => {
    const dispatch = useDispatch();
    const { values, handleChange } = useFormWithValidation({userName: ''});

    const { error, isLoading, theme } = useSelector((store) => ({
        error: store.user.feedFailed,
        isLoading: store.user.isLoading,
        theme: store.options.theme
    }), shallowEqual);

    function submitForm(evt) {
        evt.preventDefault();
        if(values.userName) {
            dispatch(updateUser(values.userName))
        };
    };

    return (
        <form className={ `${ styles.form } ${ theme === 'dark' ? commonStyles.backgroundThemeDark : commonStyles.backgroundThemeLight }` } onSubmit={ submitForm }>
            <img className={ styles.icon } src={ SearchIcon } />
            <div className={ styles.container }>
                <input 
                    className={ 
                            `${ styles.input } 
                            ${ theme === 'light' ? commonStyles.primaryTextThemeLight : commonStyles.primaryTextThemeDark } 
                            ${ error && !isLoading && styles.inputError }` 
                        }
                    name='userName'
                    type="text" placeholder='Search GitHub username' 
                    onChange={ handleChange }
                    maxLength={ 25 }
                    minLength={ 1 }
                />
                <button className={ `${ styles.button } ` } type='submit'>Search</button>
                { error && !isLoading && (<p className={ styles.errorText }>No result</p>) }
            </div>
        </form>
    )
};

export default Form;