import {h, Component} from 'preact';
import styles from './nav.scss';

const Nav = () => (
	<div className={styles['header-nav_container']}>
		<nav>
			<ul>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#projects">Project</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	</div>
);

export default Nav;

