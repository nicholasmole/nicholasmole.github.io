import {h, Component} from 'preact';
import {
	data
} from './data';
import {
	Slide
} from './slide';
import {
	Swipeable
} from '../higher';

const setSlider = ({
	index,
	button,
	title,
	text,
	src,
	alt,
	color,
	slug
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
		slug={slug}
		data={data}
		color={color}
		currentSlideIndex={slide}
		setSlide={setSlide}
	/>
);

export class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slide: 0
		}
		this.setSlide = this.setSlide.bind(this);
	}

	componentWillReceiveProps(props) {
		
		if (props.start && props.end && props.touchable) {
			// going right
			if (props.start > (props.end + 25)  ) {
				props.resetTouch();
				if (this.state.slide === 3) {
					this.setState({
						slide: 0
					})
				} else {
					const newState = this.state.slide + 1;
					this.setState({
						slide: newState
					})
				}
			}
			// going left
			if ((props.start + 25) < props.end ) {
				props.resetTouch();
				if (this.state.slide === 0) {
					this.setState({
						slide: 3
					})
				} else {
					const newState = this.state.slide - 1;
					this.setState({
						slide: newState
					})
				}
			}

			
		}
	}

	setSlide(slide) {
		this.setState({
			slide
		});
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

export default Swipeable(Slider);
