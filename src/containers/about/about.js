import {h, Component} from 'preact';
import styles from './about.scss';
import Pic from '../../components/about/pic/pic';
import Content from '../../components/about/content/content';
import Title from '../../components/global/title/title';
import ContactJump from '../../components/global/contactJump/contactJump';
import Divider from '../../components/global/divider/divider';

class About extends Component {
	render() {
		return (
			<div id="about" className={styles.about_container}>
				<Title
					title="About Mole"
				/>
				<Pic/>
				<Content/>
				<ContactJump/>
				<Divider/>
			</div>
		);
	}
}

export default About;
