import {h, Component} from 'preact';

import './sandwich.scss';

export const Sandwich = ({
	openDrawer
}) => (
	<div 
		onClick={openDrawer}
		className="sandwich_container"
	>
		<div className="sandwich">
		</div>
	</div>
);

export default Sandwich;
