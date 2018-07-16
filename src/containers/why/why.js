import {h, Component} from 'preact';
import styles from './why.scss';
import Pic from '../../components/about/pic/pic';
import WhyComponent from '../../components/why/why/why';
import Title from '../../components/global/title/title';
import ContactJump from '../../components/global/contactJump/contactJump';
import Divider from '../../components/global/divider/divider';

class Why extends Component {
	render() {
		return (
			<div id="why" className={styles.why_container}>
				<Title
					title="Why you need good web design?"
				/>
				<WhyComponent
					whys={
						[
							{
								image: {
									image: 'img/out_reach_bar_graph.png',
									alt: 'Bar graph icon'
								},
								text: 'A website is key for growth!',
								text2: 'Make people love your site.'
							},
							{
								image: {
									image: 'img/phone_icon.png',
									alt: 'Phone icon'
								},
								text: 'Everyone uses their phone.',
								text2: 'Make sure your site is responsive'
							},
							{
								image: {
									image: 'img/design_icon.png',
									alt: 'Web design icon'
								},
								text: 'Make sure it works!',
								text2: 'Test, Test, Test!'
							}
						]
					}
				/>
				{/* <Pic/>
				<Content/>
				<ContactJump/> */}
				<Divider/>
			</div>
		);
	}
}

export default Why;
