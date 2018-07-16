import {h, Component} from 'preact';
import styles from './list.scss';
import Contact from './contact/contact';

const List = ({contacts}) => (
	<div className={styles['contact-list_container']}>
		<div>
			{console.log(contacts)}
			{
				contacts &&
				contacts.map(contact => (
					<div key={contact.title}>
						<Contact
							title={contact.title}
							link={contact.link}
						/>
					</div>
				))
			}
		</div>
	</div>
);

export default List;
