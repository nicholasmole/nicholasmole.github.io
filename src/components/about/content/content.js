
import {h, Component} from 'preact';
import styles from './content.scss';

const Content = () => (
	<div className={styles['about-content_container']}>
		<p>
			A passion for coding, and web development with a thrive to develop powerful content. Experienced in UX/UI design using a range of front-end and back-end skills. A database expert, with a full stack skill set, who knows the best way to contruct a single-page application.
		</p>
		<p>
			Always following best practices - TDD (Test Driven Development) - Agile - Git Versioning - Mobile first design.
		</p>
		<p>
			What helps is testing, and research. Always looking at what the community is doing, question what you're doing, and refactor before you publish code.
			Looking for some help?
		</p>
	</div>
);

export default Content;
