import {h, Component} from 'preact';
import {
	Sandwich
} from './sandwich';

export const Banner = ({
	openDrawer
}) =>  (
	<div>
		<img 
			href="/" 
			src="/img/happy_mole_favicon_2.png" 
			alt="Now Mole's favicon"
		/>
		<Sandwich
			openDrawer={openDrawer}
		/>
	</div>
);

export default Banner;
