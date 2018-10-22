import {h, Component} from 'preact';
import styles from './subtitle.scss';

const Subtitle = () => (
	<div className={styles['home-subtitle_container']}>
		<span>Single Page Applications!</span>
		<span>Wordpress plugins!</span>
		<span>NPM packages!</span>
		<span>Full stack developer!</span>
	</div>
);

export default Subtitle;
