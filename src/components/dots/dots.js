import {h, Component} from 'preact';

import './dots.scss';

const isCurrentTarget = (
	index,
	currentTarget
) => index === currentTarget ? 'dots_dot_current_target' : ''

export const Dots = ({
	index = 1,
	data,
	selectedNumber = 0,
	currentSlideIndex,
	setSlide
}) => (
	<div
		className="dots_container"
	>
		{
			data.map(({
				index,
				color
			}, i) => (
				<div 
					onClick={() => setSlide(i)}
					className={`dots_dot ${isCurrentTarget(currentSlideIndex, i)} ${color}`}
				>	
				</div>
			))
		}
	</div>
);

export default Dots;
