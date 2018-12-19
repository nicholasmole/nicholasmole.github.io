
import {h, Component} from 'preact';
import styles from './content.scss';

const Content = () => (
	<div className={styles['about-content_container']}>
    <p>
      Web development is a unforgiving passion. Each new skill you learn or application you use can always
      be outdated by tomorrow. But that's what makes it so much fun... right?
    </p>
    <p>
      I started out by programming iPhone apps in Objective-c in 32 bits. Now apple has made everything I've created obsolete
      and has tried to get everyone to jump on board to swift. However, I've decided to go in the opposite direction, instead
      by embracing javascript and nodejs as it slowly take over the web.
    </p>
    <p>
      I am a full-stack developer who uses front-end frameworks like react, preact, or vue, as well as back tools and custom 
      management systems. This systems range from a godaddy hosted Wordpress site - to a docker configuration with an Nginx
      server and mariaDB updated strickly through composer.
    </p>
    <p>
      
    </p>
   	</div>
);

export default Content;
