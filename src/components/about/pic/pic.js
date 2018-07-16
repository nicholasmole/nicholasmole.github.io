import {h, Component} from 'preact';
import styles from './pic.scss';

const Pic = () => (
	<div className={styles['about-pic_container']}>
		<img src="img/nick_in_the_light.jpg" alt="picture"/>
	</div>
);

export default Pic;

