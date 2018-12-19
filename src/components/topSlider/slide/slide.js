import {h, Component} from 'preact';

import {
	Dots
} from '../dots';

import './slide.scss';

export const Slide = ({
	index,
	button,
	title,
	text,
	src,
	alt,
	slug,
	data,
	color,
	currentSlideIndex,
	setSlide
}) => (
	<div
		className="slide_container"
	>
		<img
			src={src}
			alt={alt}
		/>
		<Dots
			color={color}
			data={data}
			currentSlideIndex={currentSlideIndex}
			setSlide={setSlide}
		/>
		<div className="slide_title">
			{title}
		</div>
		<div className="slide_text">
			{text}
		</div>

		<a
			href={button.slug}
			className={`slide_go_button_container ${color}`}
		>

			<a
				className="slide_go_button"
			>
				{(button.name).toUpperCase()}
			</a>
		</a>
		<div className="arrow_about_home">
		</div>
	</div>
);

export default Slide;
