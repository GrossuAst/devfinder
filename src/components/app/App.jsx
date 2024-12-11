import React from 'react';
import styles from './app.module.scss';
import Header from '../header';
import Main from '../main/main';

function App() {
  return (
    <div className={styles.content}>
      <Header/>
      <Main />
    </div>
  );
}

export default App;
