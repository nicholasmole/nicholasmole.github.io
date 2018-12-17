import {h, Component} from 'preact';
import {
	Banner,
	Drawer
} from '../../components/header/index';

import './header.scss';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHeaderOpen: false
		}
		this.openDrawer = this.openDrawer.bind(this);
		this.closeDrawer = this.closeDrawer.bind(this);
	}

	openDrawer() {
		this.setState({
			isHeaderOpen: true
		})
	}

	closeDrawer() {
		this.setState({
			isHeaderOpen: false
		})
	}

	render() {
		const {
			isHeaderOpen
		} = this.state;

		return (
			<header>
				<Banner
					openDrawer={this.openDrawer}
					isHeaderOpen={isHeaderOpen}
				/>
				<Drawer
					closeDrawer={this.closeDrawer}
					isHeaderOpen={isHeaderOpen}
				/>
			</header>
		);
	}
}

export default Header;
