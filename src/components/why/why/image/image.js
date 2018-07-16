import {h, Component} from 'preact';
import styles from './image.scss';

const Image = ({image}) => (
	<img src={image.image} alt={image.alt} className={styles['why-image_container']}/>
);

export default Image;
