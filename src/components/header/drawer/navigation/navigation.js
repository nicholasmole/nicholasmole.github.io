import {h, Component} from 'preact';
import {
	data
} from './data';
import {
	Item
} from './item';
import {
	Close
} from './close';
import './navigation.scss';

export const Navigation = ({
	closeDrawer
}) => (
	<div
		className="navigation_container"
	>
		<Close 
			closeDrawer={closeDrawer}
		/>
		{
			data.map(({
				name,
				link
			}) =>
				<Item
					closeDrawer={closeDrawer}
					name={name}
					link={link}
				/>
			)
		}
	</div>
);

export default Navigation;
