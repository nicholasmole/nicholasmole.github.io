import {h, Component} from 'preact';
import styles from './nav.scss';

const Nav = () => (
	<div className={styles['header-nav_container']}>
		<nav>
			<ul>
				<li>
					<a className={styles['header-nav-small']}>Nick Mole</a>
				</li>
			</ul>
		</nav>
	</div>
);

export default Nav;

