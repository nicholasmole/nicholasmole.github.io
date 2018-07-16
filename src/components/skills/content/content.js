
import {h, Component} from 'preact';
import styles from './content.scss';

const Content = () => (
	<div className={styles['skills-content_container']}>
		<p>
			So this is the bit where most people put all there skills, but you should also be able to learn more too. (If you want to of course.) Like have you
			<a href="https://www.youtube.com/watch?v=rKXFgWP-2xQ"> seen whats coming with PHP 7.3?</a>
		</p>
		<p> What about learning some of reacts best practices: <a href="https://www.youtube.com/watch?v=v6iR3Zk4oDY"> Listen to Dan Abramov.</a> This <a href="https://twitter.com/dan_abramov">guy</a> <strong>is</strong> <a href="https://egghead.io/courses/getting-started-with-redux">react and redux!</a>
		</p>
		<p>
			Web dev talks aren't always about learning <a href="http://confreaks.tv/videos/railsconf2018-closing-keynote">Aaron Patterson does some fun presentations.</a> 
		</p>
		<p>
			And here are my skills:
		</p>
	</div>
);

export default Content;
