import {h, Component} from 'preact';
import styles from './header.scss';
import Banner from '../../components/header/banner/banner';
import Nav from '../../components/header/content/nav';

class Header extends Component {

	render() {
		return (
			<header>
				<Banner/>
				<Nav/>
			</header>
		);
	}
}

export default Header;
