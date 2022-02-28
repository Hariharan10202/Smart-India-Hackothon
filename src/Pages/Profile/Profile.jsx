import { ArrowRight, PostAdd } from '@material-ui/icons';
import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.leftWrapper}>
            <img src='Images/person1.jpg' alt='profile' />
            <h3>Vanessa</h3>
            <p>
              I'm Vanessa and I'm MERN Stack developer Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ut quod, non itaque, necessitatibus, aperiam tempora accusantium hic
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightWrapper}>
            <h1>Projects Done</h1>
            <ul className={styles.project}>
              <li>
                <ArrowRight /> <span>Chatting System</span>
              </li>
              <li>
                <ArrowRight /> <span>Chatting System</span>
              </li>
              <li>
                <ArrowRight /> <span>Chatting System</span>
              </li>
              <li>
                <ArrowRight /> <span>Chatting System</span>
              </li>
            </ul>
            <div className={styles.recentPost}>
              <div className={styles.recentHeading}>
                <h2>Recent Post</h2>
                <button>
                  <PostAdd className={styles.icon} /> Make a post
                </button>
              </div>
              <div className={styles.posts}>
                <div className={styles.postList}>
                  <img src='Images/post.jpg' alt='post' />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolor illum
                    ullam velit magnam ex quae. Praesentium unde sequi velit voluptas, expedita
                    corrupti enim accusamus repellendus quasi facere sint odit!
                  </p>
                </div>
                <div className={styles.postList}>
                  <img src='Images/post.jpg' alt='post' />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolor illum
                    ullam velit magnam ex quae. Praesentium unde sequi velit voluptas, expedita
                    corrupti enim accusamus repellendus quasi facere sint odit!
                  </p>
                </div>
                <div className={styles.postList}>
                  <img src='Images/post.jpg' alt='post' />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolor illum
                    ullam velit magnam ex quae. Praesentium unde sequi velit voluptas, expedita
                    corrupti enim accusamus repellendus quasi facere sint odit!
                  </p>
                </div>
                <div className={styles.postList}>
                  <img src='Images/post.jpg' alt='post' />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolor illum
                    ullam velit magnam ex quae. Praesentium unde sequi velit voluptas, expedita
                    corrupti enim accusamus repellendus quasi facere sint odit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
