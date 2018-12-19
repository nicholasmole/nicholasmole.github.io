import {h, Component} from 'preact';

import {
	Dots
} from '../../dots';

import './slide.scss';

export const Slide = ({
	index,
	button,
	title,
	text,
	src,
	alt,
	data,
	color,
	currentSlideIndex,
	setSlide
}) => (
	<div
		id="about"
		className="about_slide_container"
	>
		

		<div className="about_slide_title">
			{title}
		</div>
		<img
			src={src}
			alt={alt}
		/>
		<div className="about_slide_text">
			{text}
		</div>
		<Dots
			color={color}
			data={data}
			currentSlideIndex={currentSlideIndex}
			setSlide={setSlide}
		/>
		<div className="arrow_about_home white_arrow">
		</div>
	</div>
);

export default Slide;
