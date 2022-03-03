import React from 'react';
import styles from './Navbar.module.css';
import { Search } from '@material-ui/icons';
import { NotificationsNone } from '@material-ui/icons';
import { AccountCircleOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.menus}>
            <Link to='/' className='link'>
              <span className={styles.menuItem}>Peoples</span>
            </Link>
            <Link to='/projects' className='link'>
              <span className={styles.menuItem}>Project</span>
            </Link>
            <Link to='/events' className='link'>
              <span className={styles.menuItem}>Events</span>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.search}>
            <Search />
            <input type='text' placeholder='Search' />
          </div>
          <div className={styles.notify}>
            <Link to='/notifications' className='link'>
              <NotificationsNone className={styles.notifyIcon} />
              <span className={styles.counter}>3</span>
            </Link>
          </div>
          <Link to='/Myprofile' className='link'>
            <AccountCircleOutlined className={styles.Icon} />
          </Link>
          <div className={styles.others}>
            <Link to='/logout' className='link'>
              <span className={styles.menuItem}>LOGOUT</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
