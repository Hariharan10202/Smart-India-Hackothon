import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.wrapper}>
        <div className={styles.projectList}>
          <h1>
            Posted By Jane, <span>22/02/2022</span>
          </h1>
          <div className={styles.details}>
            <div className={styles.left}>
              <img src='Images/post.jpg' alt='' />
            </div>
            <div className={styles.right}>
              <h2>Project Title</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In officiis hic incidunt
                deserunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
                dolores, Lorem, ipsum dolor sit amet consectetur adipisicing elit. In officiis hic
                incidunt deserunt Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate dolores,
              </p>
              <div className={styles.buttons}>
                <button>View Details</button>
                <button>Request to Join Team</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectList}>
          <h1>
            Posted By Jane, <span>22/02/2022</span>
          </h1>
          <div className={styles.details}>
            <div className={styles.left}>
              <img src='Images/post.jpg' alt='' />
            </div>
            <div className={styles.right}>
              <h2>Project Title</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In officiis hic incidunt
                deserunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
                dolores, Lorem, ipsum dolor sit amet consectetur adipisicing elit. In officiis hic
                incidunt deserunt Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate dolores,
              </p>
              <div className={styles.buttons}>
                <button>View Details</button>
                <button>Request to Join Team</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
