import React from 'react';
import styles from './Events.module.css';
const Events = () => {
  return (
    <div className={styles.event}>
      <div className={styles.wrapper}>
        <div className={styles.eventList}>
          <div className={styles.eventlistItem}>
            <img src='Images/post.jpg' alt='event' />
            <h3>Event Name</h3>
            <button>Register</button>
          </div>
          <div className={styles.eventlistItem}>
            <img src='Images/post.jpg' alt='event' />
            <h3>Event Name</h3>
            <button>Register</button>
          </div>
          <div className={styles.eventlistItem}>
            <img src='Images/post.jpg' alt='event' />
            <h3>Event Name</h3>
            <button>Register</button>
          </div>
          <div className={styles.eventlistItem}>
            <img src='Images/post.jpg' alt='event' />
            <h3>Event Name</h3>
            <button>Register</button>
          </div>
          <div className={styles.eventlistItem}>
            <img src='Images/post.jpg' alt='event' />
            <h3>Event Name</h3>
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
