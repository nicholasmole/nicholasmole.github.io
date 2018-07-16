import {h, Component} from 'preact';
// import {connect} from 'preact-redux';
import {updateTitle} from '../../ducks/title';
import styles from './title.scss';

const mapStateToProps = state => ({
	myStore: state,
	currentTitle: state.currentTitle.title
});

const mapDispatchToProps = dispatch => ({
	dispatchUpdateTitle: props => dispatch(updateTitle(props))
});

class Title extends Component {
	componentDidMount() {
		this.props.dispatchUpdateTitle('Welcome');
	}

	render() {
		const {
			myStore,
			currentTitle
		} = this.props;
		console.log(currentTitle);
		return (
			<div className={styles.title_h1}>
					<h1>{currentTitle}</h1>
			</div>
		);
	}
}

// export default connect(mapStateToProps, mapDispatchToProps)(Title);
export default Title;
