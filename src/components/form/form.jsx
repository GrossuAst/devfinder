import styles from './form.module.scss';
import SearchIcon from '../../images/search-icon.svg';

const Form = () => {
    return (
        <form className={ styles.form }>
            <img className={ styles.icon } src={ SearchIcon } />
            <div className={ styles.container }>
                <input className={ styles.input } type="text" placeholder='Search GitHub username' />
                <button className={ styles.button } type='submit'>Search</button>    
            </div>
        </form>
    )
};

export default Form;