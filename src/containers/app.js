import {h, Component} from 'preact';
import {Router} from 'preact-router';
import styles from './app.scss';
import asyncComponent from '../components/AsyncComponent';
import Header from './header/header';
import Title from './title/title';
import Loadable from 'react-loadable';
import Loading from '../components/MyLoadingComponent';

const AsyncHome = Loadable({
	loader: () => import('./home/home'),
	loading: Loading
});
const AsyncWhy = Loadable({
	loader: () => import('./why/why'),
	loading: Loading
});
const AsyncAbout = Loadable({
	loader: () => import('./about/about'),
	loading: Loading
});
const AsyncProjects = Loadable({
	loader: () => import('./projects/projects'),
	loading: Loading
});
const AsyncSkills = Loadable({
	loader: () => import('./skills/skills'),
	loading: Loading
});
const AsyncContact = Loadable({
	loader: () => import('./contact/contact'),
	loading: Loading
});


const AsyncTopSlider = Loadable({
	loader: () => import('./topSlider/topSlider'),
	loading: Loading
});

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
		document.getElementById('loading_page').outerHTML = "";
		setTimeout(() => {
			this.setState({loaded: true});
		}, 300);
	}

	render() {
		const {
			loaded
		} = this.state;
		return (
			<div id={styles.app}>
				<div id="wrap">
					<Header/>
					<AsyncTopSlider/>
					{/* <AsyncHome/>
					{
						loaded &&
						<div className={styles.fun_color_box}>
							<AsyncAbout/>
							<AsyncProjects/>
							<AsyncSkills/>
							<AsyncContact/>
						</div>
					} */}
				</div>
			</div>
		);
	}
}

export default App;
