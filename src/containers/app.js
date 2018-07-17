import {h, Component} from 'preact';
import {Router} from 'preact-router';
import styles from './app.scss';
import asyncComponent from '../components/AsyncComponent';
import Header from './header/header';
import Title from './title/title';

const AsyncHome = asyncComponent(() => import('./home/home'));
const AsyncWhy = asyncComponent(() => import('./why/why'));
const AsyncAbout = asyncComponent(() => import('./about/about'));
const AsyncProjects = asyncComponent(() => import('./projects/projects'));
const AsyncSkills = asyncComponent(() => import('./skills/skills'));
const AsyncContact = asyncComponent(() => import('./contact/contact'));

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}

	handleLoad = () => {
		this.setState({
			loaded: true
		});
	}

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		if (document.readyState === 'complete') {
			this.handleLoad();
		}
	}

	render() {
		const {
			loaded
		} = this.state;
		return (
			<div id={styles.app}>
				<div id="wrap">
					<Header/>
					<AsyncHome/>
					{
						loaded &&
						<div>
							<AsyncWhy/>
							<AsyncAbout/>
							<AsyncProjects/>
							<AsyncSkills/>
							<AsyncContact/>
						</div>
					}
				</div>
			</div>
		);
	}
}

export default App;
