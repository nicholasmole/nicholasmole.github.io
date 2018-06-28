import {h, Component} from 'preact';
import styles from './app.scss';

class HomePage extends Component {
	render() {
		const {about, loaded} = this.state;
		return (
			<div>
				<div id="app" className={styles.app}>
					Home Page
				</div>
			</div>
		);
	}
}

export default HomePage;
