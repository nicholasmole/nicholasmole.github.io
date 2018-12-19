import {h, Component} from 'preact';
import {
	data
} from './data';
import {
	Slide
} from './slide';

const setSlider = ({
	index,
	button,
	title,
	text,
	src,
	alt,
	color
},
	slide,
	setSlide
) => (
	<Slide
		index={index}
		button={button}
		title={title}
		text={text}
		src={src}
		alt={alt}
		data={data}
		color={color}
		currentSlideIndex={slide}
		setSlide={setSlide}
	/>
);

export class AboutSlide extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slide: 0
		}
		this.setSlide = this.setSlide.bind(this);
	}

	setSlide(slide) {
		this.setState({
			slide
		})
	}

	render () {
		const {
			slide
		} = this.state;

		return (
			<div
				className="topSlider_container"
			>
				{setSlider(data[slide], slide, this.setSlide)}
			</div>
		);

	}
}

export default AboutSlide;
