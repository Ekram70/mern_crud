import React from 'react';
import loader from '../../assets/images/loader.svg';
import styles from '../../styles/FullScreenLoader.module.css';

const FullScreenLoader = () => {
  return (
    <div className={styles.ProcessingDiv}>
      <div className={styles.centerScreen}>
        <img src={loader} alt="loader" />
      </div>
    </div>
  );
};

export default FullScreenLoader;
