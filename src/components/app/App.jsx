import React from 'react';
import styles from './app.module.scss';
import Header from '../header';
import Main from '../main/main';
import { useSelector, shallowEqual } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const { theme } = useSelector((store) => ({
    theme: store.options.theme
  }), shallowEqual);

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className={styles.content}>
      <Header/>
      <Main />
    </div>
  );
}

export default App;
