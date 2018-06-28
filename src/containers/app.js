import {h, Component} from 'preact';
import {Router} from 'preact-router';
import asyncComponent from '../components/AsyncComponent';
import Header from '../components/header';

const AsyncHome = asyncComponent(() => import('./home'));
const AsyncLink2 = asyncComponent(() => import('./about'));

class App extends Component {
	render() {
		return (
			<div id="app">
				<div id="wrap">
					<Header/>
					<Router load={this.state.load}>
						<AsyncHome path="/"/>
						<AsyncLink2 path="/about-us" />
						<AsyncHome default/>
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
