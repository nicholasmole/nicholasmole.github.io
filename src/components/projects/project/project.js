import {h, Component} from 'preact';
import styles from './project.scss';
import Item from './item/item';

const Project = ({items}) => (
	<div className={styles['projects-project_container']}>
		<ul>
			{
				items &&
				items.map(item => (
					<Item
						key={item.title}
						image={item.image}
						title={item.title}
						content={item.content}
						link={item.button}
					/>
				))
			}
		</ul>
	</div>
);

export default Project;
