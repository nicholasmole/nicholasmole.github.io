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
	setSlide,
	innerData
}) => (
	<div
		className="work_slide_container"
	>
		<div className="work_slide_title">
			{title}
		</div>
		{/* <img
			src={src}
			alt={alt}
		/> */}
		<div className="work_slide_text">
			{text}
		</div>

		{
			innerData.map(({
				src,
				alt,
				text,
				title
			}) => (
				<div className="work_innerData_container">
					<div className="work_innerData_image">
						<img
							src={src}
							alt={alt}
						/>
					</div>
					<div className="work_innerData_content_container">
						<div className="work_innerData_content_title">
							{title}
						</div>
						<div className="work_innerData_content_text">
							{text}
						</div>
					</div>
				</div>
			))
		}
		<Dots
			color={color}
			data={data}
			currentSlideIndex={currentSlideIndex}
			setSlide={setSlide}
		/>
		<div className="arrow_about_home">
		</div>
	</div>
);

export default Slide;
