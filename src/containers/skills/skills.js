import {h, Component} from 'preact';
import styles from './skills.scss';
import Content from '../../components/skills/content/content';
import List from '../../components/skills/list/list';
import Title from '../../components/global/title/title';
import Divider from '../../components/global/divider/divider';

class Skills extends Component {
	render() {
		return (
			<div id="skills" className={styles.skills_container}>
				<Title
					title="Skills and Knowledge"
				/>
				<Content/>
				<img src="img/lang_icons_1.gif" alt="Image of programming languages" className={styles.skills_container_image}/>
				<List
					skills={
						[
							'Javascript',
							'JQuery',
							'React',
							'Redux',
							'Node.js',
							'React Native',
							'PHP',
							'Wordpress',
							'Laravel',
							'MySql',
							'MariaDB',
							'SCSS',
							'Bootstrap',
							'Vim',
							'Docker',
							'Git',
							'Ruby',
							'Rails'
						]
					}
				/>
				<Divider/>
			</div>
		);
	}
}

export default Skills;
