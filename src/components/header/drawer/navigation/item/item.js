import {h, Component} from 'preact';

import './item.scss';

export const Item = ({
	name,
	link,
	closeDrawer
}) => (
	<a
		href={link}
		onClick={closeDrawer}
		className="navigation_item_container"
	>
		{name}
	</a>
);

export default Item;
