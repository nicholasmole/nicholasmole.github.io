import {h, Component} from 'preact';
import styles from './list.scss';
import Skill from './skill/skill';

const List = ({skills}) => (
	<div className={styles['skills-list_container']}>
		<ul>
			{
				skills &&
				skills.map(skill => (
					<Skill
						key={skill}
						title={skill}
					/>
				))
			}
		</ul>
	</div>
);

export default List;
