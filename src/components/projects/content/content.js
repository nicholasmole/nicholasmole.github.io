
import {h, Component} from 'preact';
import styles from './content.scss';

const Content = () => (
	<div className={styles['projects-content_container']}>
		<p>
			View worked on projects, and some useful git repos. If you want to use something for yourself go ahead. Please leave comments, any updates you might want to request, and ask if you want to know some more information.
		</p>
	</div>
);

export default Content;
