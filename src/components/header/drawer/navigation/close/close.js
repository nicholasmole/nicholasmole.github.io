import {h, Component} from 'preact';

import './close.scss';

export const Close = ({
	closeDrawer
}) => (
	<div
		onClick={closeDrawer}
		className="navigation_close_button"
	>
		x
	</div>
);

export default Close;
