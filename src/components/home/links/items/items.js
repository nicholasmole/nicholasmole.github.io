import {h, Component} from 'preact';
import styles from './items.scss';

const Items = ({text="", link}) => (
	<a href={link} className={styles['links-items_container']}>
		<a>
			{text}
		</a>
	</a>
);

export default Items;

