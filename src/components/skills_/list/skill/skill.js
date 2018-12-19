import {h, Component} from 'preact';
import styles from './skill.scss';

const Skill = ({title}) => (
	<li className={styles['skills-list-skill']}>
		{title}
	</li>
);

export default Skill;
