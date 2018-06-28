import {h, Component} from 'preact';
import appStyle from './app.scss';
import styles from './about.scss';

class HomePage extends Component {

	render() {
		return (
			<div>
				<div id="about" className={`${appStyle.app} ${styles.aboutus}`}>
					ABOUT
				</div>
			</div>
		);
	}
}

export default HomePage;
