import {h, Component} from 'preact';
import styles from './hero.scss';
import Content from './content/content';
import Subtitle from './subtitle/subtitle';
import Orbs from './orbs/orbs';

const Hero = () => (
	<div className={styles['hero_container']}>
		<img href="/" src="img/At_the_desk_769.jpeg" alt="A computer phone and notebook" className={styles.hero_image}/>
		<Orbs/>
		<Content/>
		<Subtitle/>
	</div>
);

export default Hero;

