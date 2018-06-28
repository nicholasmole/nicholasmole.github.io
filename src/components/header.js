import {h, Component} from 'preact';
import styles from './header.scss';

class Header extends Component {
	constructor(props) {
		super(props);
		this.toggledClick = this.toggledClick.bind(this);
		this.state = {
			clickCheck: false
		};
	}

	toggledClick = () => {
		this.setState(prevState => ({
			clickCheck: !prevState.clickCheck
		}));
	}

	render() {
		const menu_header_state = this.state.clickCheck ? styles.header_state_true : styles.header_state_false;
		let pos = this.state.clickCheck ? 28 : -100;
		let transformProp = `translateY(${pos}%)`;
		return (
			<div className={styles.header_container}>
				<div className={styles.header_container_none_nav}>
					<div className={styles.header_icon}>
						<a>
							HOME ICON
						</a>
					</div>
					<div onClick={this.toggledClick} className={styles.sandwich_container}>
						<div className={styles.sandwich}>
						</div>
					</div>
				</div>
				<div className={styles.header_navigation}>
					<span className={`${styles.header_state} ${menu_header_state}`} style={{transition: `transform 1s ease`, transform: transformProp}}>
						<div className={styles.mobileHolder}>
							<a href="/#">Home</a>
							<span className={styles.header_slash}>/</span> 
							<a href="/about-us">LINK 2</a>
						</div>
					</span>
				</div>
			</div>
		);
	}	
};

export default Header;
