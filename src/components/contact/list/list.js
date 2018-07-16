import {h, Component} from 'preact';
import styles from './list.scss';
import Contact from './contact/contact';

const List = ({contacts}) => (
	<div className={styles['contact-list_container']}>
		<div>
			{
				contacts &&
				contacts.map(contact => (
					<Contact
						key={contact}
						title={contact.title}
						link={contact.link}
					/>
				))
			}
		</div>
	</div>
);

export default List;
