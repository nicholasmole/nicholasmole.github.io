import {h, Component} from 'preact';

import {
	Dots
} from '../../dots';

import './slide.scss';

const isRight = (
	index
) => index % 2 === 0 ? `isRight` : ``;

export const Slide = ({
	index,
	button,
	title,
	text,
	src,
	alt,
	data,
	list,
	color,
	currentSlideIndex,
	setSlide
}) => (
	<div
		className="skills_work_slide_container"
	>

		<div className="work_slide_content_container">
			<div className="slide_container_page_limit">
				<div className="work_slide_title">
					{title}
				</div>
				<img
					className={isRight(index)}
					src={src}
					alt={alt}
				/>
				
				<div className="skills_slide_text">
					{text}
				</div>
				{
					list && 
					<div className="work_slide_list_container">
						{
							list.map(item =>
								<div className="work_slide_list_item">
									{item}
								</div>
							)
						}
					</div>
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
