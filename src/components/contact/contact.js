import {h, Component} from 'preact';
import {
	data
} from './data';

import './contact.scss';

const SetSlider = ({
	index,
	text,
	link
}) => (
	<div
		href={link}
		className="contact_me_slide_link_container"
	>
	<a 
		href={link}
		className="contact_me_slide_link"
	>
		{text}
	</a>
	</div>
);

export class ContactSlide extends Component {
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
				id="contact"
				className="topSlider_container"
			>
				<div className="contact_me_container">
					<div className="contact_me_title">
						Contact Me
					</div>
					<div className="contact_me_text">
						Need some help? Want to chat? Choose your contact method!
					</div>
					{
						data.map(item =>
							<SetSlider
								{...item}
							/>
						)
					}
				</div>
			</div>
		);

	}
}

export default ContactSlide;
