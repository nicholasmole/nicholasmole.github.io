import {h, Component} from 'preact';
import styles from './subtitle.scss';

const Subtitle = () => (
	<div className={styles['home-subtitle_container']}>
		<span>Make it flashy!</span>
		<span>Make it awesome!</span>
		<span>Make it Last!</span>
		<span>Make it with Mole!</span>
	</div>
);

export default Subtitle;
