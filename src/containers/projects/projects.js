import {h, Component} from 'preact';
import styles from './projects.scss';
import Pic from '../../components/about/pic/pic';
import Content from '../../components/projects/content/content';
import ContactJump from '../../components/global/contactJump/contactJump';
import Title from '../../components/global/title/title';
import Project from '../../components/projects/project/project';
import Divider from '../../components/global/divider/divider';

class Projects extends Component {
	render() {
		return (
			<div id="projects" className={styles.projects_container}>
				<Title
					title="Projects and Repos"
				/>
				<Content/>
				<Project
					items={
						[
							{
								image: {
									src: '/img/caisoft_150.jpg',
									alt: 'caisoft image'
								},
								title: 'CAisoft',
								content: 'Wordpress - Custom Data Plugins, Docker, MariaDB',
								button: {
									text: 'Go',
									link: 'https://caisoft.com/'
								}
							},
							{
								image: {
									src: '/img/cj_150.jpg',
									alt: 'Cj carpentry image'
								},
								title: 'CJ Carpentry',
								content: 'React App - Single Page / Async Loading',
								button: {
									text: 'Go',
									link: 'https://cjcarpentry.org/'
								}
							},
							{
								image: {
									src: '/img/cleary_150.jpg',
									alt: 'Cleary Millwork '
								},
								title: 'Cleary Millwork',
								content: 'Wordpress - Custom User Auth plugins, Docker',
								button: {
									text: 'Go',
									link: 'https://www.clearymillwork.com/'
								}
							},
							{
								image: {
									src: '/img/ri_150.jpg',
									alt: 'Rhode Races'
								},
								title: 'Rhode Races',
								content: 'Wordpress - Visual Composer, Design, and Development ',
								button: {
									text: 'Go',
									link: 'http://runri.us/'
								}
							},
							{
								image: {
									src: '/img/terminal_csv_150.png',
									alt: 'terminal image with clock'
								},
								title: 'Time Task Logger',
								content: 'Ruby - Time tracker built into terminal, with rspec ',
								button: {
									text: 'Go',
									link: 'https://github.com/nicholasmole/time_task_logger'
								}
							},
							{
								image: {
									src: '/img/preact_ele_150.jpg',
									alt: 'Preact Electron Window '
								},
								title: 'Preact Electron Template App',
								content: 'Preact / Electron - A template for a electron application.',
								button: {
									text: 'Go',
									link: 'https://github.com/nicholasmole/preact-electron-demo-redux-router'
								}
							},
							{
								image: {
									src: '/img/add_user_fields_150.jpg',
									alt: 'Options menu for adding users '
								},
								title: 'Add User Fields - Plugin',
								content: 'Wordpress - Create custom fields for user in wordpress',
								button: {
									text: 'Go',
									link: 'https://github.com/nicholasmole/add_user_field'
								}
							}
						]
					}
				/>
				<Divider/>
			</div>
		);
	}
}

export default Projects;
