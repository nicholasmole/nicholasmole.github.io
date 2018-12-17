import {h, Component} from 'preact';
import {
	Navigation
} from './navigation';
import './drawer.scss';

export const Drawer = ({
	closeDrawer,
	isHeaderOpen
}) => { 
	if (isHeaderOpen) {
		return (
			<div
				className="drawer_container"
			>
				<Navigation
					closeDrawer={closeDrawer}
				/>
			</div>
		);
	}
	return (
		<div>
		</div>
	);
}
export default Drawer;
