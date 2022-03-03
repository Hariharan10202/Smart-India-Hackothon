import React from 'react';
import styles from './SidePane.module.css';

const SidePane = () => {
  return (
    <div className={styles.Pane}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src='Images/logo.jpg' alt='logo' />
      </div>
    </div>
  );
};

export default SidePane;
