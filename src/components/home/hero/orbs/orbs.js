import {h, Component} from 'preact';
import styles from './orbs.scss';

const Orbs = () => (
	<div className={styles.containCenter}>
		<div className={styles.floatingorb}></div>	
		<div className={styles.floatingorb2}></div>	
		<div className={styles.floatingorb3}></div>	
		<div className={styles.floatingorb4}></div>	
	</div>
);

export default Orbs;