import {h, Component} from 'preact';
import styles from './contact.scss';
import Copy from '../../components/contact/copy/copy';
import Content from '../../components/contact/content/content';
import List from '../../components/contact/list/list';
import Title from '../../components/global/title/title';
import Divider from '../../components/global/divider/divider';

class Contact extends Component {
	render() {
		return (
			<div id="contact" className={styles.contact_container}>
				<Title
					title="Contact"
				/>

				<Content/>
				<List
					contacts={
						[
							{
								title: 'GitHub',
								link: 'https://github.com/nicholasmole'
							},
							{
								title: '@infamousmole',
								link: 'https://twitter.com/infamousmole'
							},
							{
								title: 'linkedin',
								link: 'https://www.linkedin.com/in/nicholas-mole/'
							},
							{
								title: '(413) 348-5433',
								link: 'tel:4133485433'
							},
							{
								title: 'nmole065@gmail',
								link: 'mailto:nmole065@gmail'
							}
						]
					}

				/>
				<Copy/>
			</div>
		);
	}
}

export default Contact;
