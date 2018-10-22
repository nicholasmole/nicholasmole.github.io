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
                content: `Software development company. Wordpress CMS. Developing CustomPlugins. 
                Launched using Docker, MariaDB database`,
								button: {
									text: 'Go',
									link: 'https://caisoft.com/'
                },
                expansion: {
                  text: `Software development company with hundreds of blog, product pages. Site
                  needed to be transferred from an old server to Digital Ocean environment. Used GIT
                  and docker as version and deployment control.`
                }
							},
              {
                image: {
                  src: '/img/custom_app_200.jpg',
                  alt: 'Custom Application'
                },
                title: 'Company News Source',
                content: `Custom News Source application for client internal company use. React single
                page application that pulls in data from back-end source.`,
                expansion: {
                  text: `React application developed using a custom Webpack setup. Application created
                  for company internal use only. Developed with SSO implementation for security. Uses
                  REST api to collect and display information.`
                },
                button: {
                  text: '',
                  link: ''
                }
              },
							{
								image: {
									src: '/img/cleary_150.jpg',
									alt: 'Cleary Millwork '
								},
								title: 'Cleary Millwork',
                content: `Woodwork/ Manufacturing company. Wordpress CMS with custom user/admin 
                plugin development.`,
								button: {
									text: 'Go',
									link: 'https://www.clearymillwork.com/'
                },
                expansion: {
                  text: `Develop site, and create custom theme for client. Develop plugin 
                  to help client customizer their user experience. Allowing client to develop
                  custom fields for Wordpress user data. And allow certain users to access 
                  only pages they are allowed to on the backend.`
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
                },
                expansion: {
                  text: `Update client site using the visual composer builder tool. Client
                  already has site built. Needed to make edits, and revisions where necessary.
                  Create custom pages for new events for client.`
                }
							},
							{
								image: {
									src: '/img/foia_200.png',
									alt: 'Find Object in Array'
								},
								title: 'Find Object in Array',
                content: 'npm package finds an object in an array of objects',
                button: {
									text: 'Go',
									link: 'https://github.com/nicholasmole/time_task_logger'
                },
                expansion: {
                  text: `When making api requests in javascript this is the easiest way to
                  have your application search for one specific object in an array of objects.
                  Simply applying the array, key, and value you are looking for and this function
                  turns into the object you need.
                  `
                }
							},
              {
								image: {
									src: '/img/cj_150.jpg',
									alt: 'Cj carpentry image'
								},
								title: 'CJ Carpentry',
								content: 'Preact App - Single Page / Async Loading',
								button: {
									text: 'Go',
									link: 'https://cjcarpentry.org/'
                },
                expansion: {
                  text: `A single page application create per diem with zero budget, no given content,
                  and a very short time line. Got site up and live from purchasing site name to launch.`
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
                },
                expansion: {
                  text: `Electron is a very popular way for web developers to create cross
                    platform applications. Preact is a smaller version of React so you can
                    save a lot of space as electron tends to eat up as much ram as it can get.
                  `
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
                },
                expansion: {
                  text: `Trying to give users in your wordpress site, extra fields?
                    this plugin allows you to create fields that are editable on the
                    admin user pages.
                  `
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
