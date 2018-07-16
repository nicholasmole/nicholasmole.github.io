import {h, Component} from 'preact';
import styles from './content.scss';

const Content = () => (
	<div className={styles['hero-content_container']}>
		<h1>
			<span className={styles['hero-content_pretext']}>Make a site with </span>
			<span className={styles['hero-content_title']}>Nick Mole</span>
		</h1>
	</div>
);

export default Content;

