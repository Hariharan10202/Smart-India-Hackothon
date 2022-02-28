import React from 'react';
import { Swiper } from 'swiper/react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.Wrapper}>
        <div className={styles.middle}>
          <Swiper className={styles.list}>
            <div className={styles.listItem}>
              <img src='Images/person1.jpg' alt='person' />
              <h2 className={styles.profileName}>Emilia</h2>
              <button>Connect</button>
            </div>
            <div className={styles.listItem}>
              <img className={styles.suggestionImg} src='Images/person2.jpg' alt='person' />
              <h2 className={styles.profileName}>Vanessa</h2>
              <button>Connect</button>
            </div>
            <div className={styles.listItem}>
              <img src='Images/person3.jpg' alt='person' />
              <h2 className={styles.profileName}>Jessica</h2>
              <button>Connect</button>
            </div>
            <div className={styles.listItem}>
              <img src='Images/person3.jpg' alt='person' />
              <h2 className={styles.profileName}>Jessica</h2>
              <button>Connect</button>
            </div>
            <div className={styles.listItem}>
              <img src='Images/person3.jpg' alt='person' />
              <h2 className={styles.profileName}>Jessica</h2>
              <button>Connect</button>
            </div>
          </Swiper>
        </div>
        <div className={styles.bottom}>
          <div className={styles.communityHeader}>
            <h3>Communities</h3>
          </div>

          <div className={styles.communityList}>
            <div className={styles.communityListItem}>
              <img src='Images/person1.jpg' alt='communityProfile' />
              <h2 className={styles.communityName}>Community Name</h2>
              <button className={styles.joinButton}>Join</button>
              <button></button>
            </div>
            <div className={styles.communityListItem}>
              <img src='Images/person1.jpg' alt='communityProfile' />
              <h2 className={styles.communityName}>Community Name</h2>
              <button className={styles.joinButton}>Join</button>
            </div>
            <div className={styles.communityListItem}>
              <img src='Images/person1.jpg' alt='communityProfile' />
              <h2 className={styles.communityName}>Community Name</h2>
              <button className={styles.joinButton}>Join</button>
            </div>
            <div className={styles.communityListItem}>
              <img src='Images/person1.jpg' alt='communityProfile' />
              <h2 className={styles.communityName}>Community Name</h2>
              <button className={styles.joinButton}>Join</button>
            </div>
            <div className={styles.communityListItem}>
              <img src='Images/person1.jpg' alt='communityProfile' />
              <h2 className={styles.communityName}>Community Name</h2>
              <button className={styles.joinButton}>Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
