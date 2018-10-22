import {h, Component} from 'preact';
import styles from './content.scss';

const Content = () => (
	<div className={styles['hero-content_container']}>
		<h1>
      <span className={styles['hero-content_pretext']}>
        <span className={styles['hero-content_dev']}>
            Developer
        </span>
        & 
        <span className={styles['hero-content_pro']}>
          Programmer
        </span>
      </span>
      <span className={styles['hero-content_posttitle']}>
        My name is 
      </span>
      <span className={styles['hero-content_title']}>
         Nick Mole
       </span>
       <span className={styles['hero-content_posttitle']}>
         . I am a full-stack developer. I write plugins, 
         and js packages that for the world to use.
       </span>
		</h1>
	</div>
);

export default Content;

