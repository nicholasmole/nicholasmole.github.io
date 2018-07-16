import {h, Component} from 'preact';
import styles from './links.scss';
import Items from './items/items';

const Links = () => (
	<div className={styles['home-links_container']}>
		<Items
			text="About"
			link="#about"
		/>
		<Items
			text="Projects"
			link="#projects"
		/>
		<Items
			text="Skills"
			link="#skills"
		/>
		<Items
			text="Contact"
			link="#contact"
		/>
	</div>
);

export default Links;

