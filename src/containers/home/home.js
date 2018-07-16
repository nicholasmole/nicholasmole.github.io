
import {h, Component} from 'preact';
import styles from './home.scss';
import Hero from '../../components/home/hero/hero';
import Links from '../../components/home/links/links';
import Divider from '../../components/global/divider/divider';

class Home extends Component {
	render() {
		return (
			<section>
				<div id="home" className={styles['home-page_container']}>
					<Hero/>
					<Links/>
					<Divider/>
				</div>
			</section>
		);
	}
}

export default Home;
