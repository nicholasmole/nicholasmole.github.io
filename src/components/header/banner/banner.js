import {h, Component} from 'preact';
import styles from './banner.scss';

const Banner = () => (
	<div className={styles['header-banner_container']}>
		<img href="/" src="img/happy_mole_favicon.png" alt="Now Mole's favicon"/>
	</div>
);

export default Banner;

