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
		<div className="slide_container_page_limit">
			<div className="work_slide_title">
				{title}
			</div>
			<div className="work_slide_text">
				{text}
			</div>
			<div className="work_innerData_container_container">
			{
				innerData.map(({
					src,
					alt,
					text,
					title,
					link
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
							<a href={link} target="_blank">
								Go
							</a>
						</div>
					</div>
				))
			}
			</div>
			<Dots
				color={color}
				data={data}
				currentSlideIndex={currentSlideIndex}
				setSlide={setSlide}
			/>
		</div>
		<div className="arrow_about_home">
		</div>
	</div>
);

export default Slide;
