import React from 'react';
import styles from './app.module.scss';
import Header from '../header';

function App() {
  return (
    <div className={styles.content}>
      <Header/>
    </div>
  );
}

export default App;
