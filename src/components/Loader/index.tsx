import React from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div className={`${styles.loader} ${!loading ? styles.hidden : ''}`}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;