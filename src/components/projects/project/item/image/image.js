import {h, Component} from 'preact';
import styles from './image.scss';

const Image = ({src, alt}) => (
	<img src={src} alt={alt} className={styles['project-item-image']}/>
);

export default Image;

