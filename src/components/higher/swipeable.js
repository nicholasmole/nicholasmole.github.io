import {h, Component} from 'preact';

// This function takes a component...
export const Swipeable = (WrappedComponent, selectData) => {
  // ...and returns another component...
  return class extends Component {
    constructor(props) {
      super(props);
      this.onStart = this.onStart.bind(this);
      this.onEnd = this.onEnd.bind(this);
      this.resetTouch = this.resetTouch.bind(this);
      this.reTouchable = this.reTouchable.bind(this);
      this.state = {
				start: null,
				end: null,
				touchable: true
      };
    }

    onStart(e) {
			let touchStart = e.screenX;
			if (e.touches) {
				if (e.touches[0]) {
					touchStart = e.touches[0].screenX;
				}
			}
			this.setState({
				start: touchStart
			})
		}
		
    onEnd(e) {
			let touchEnd = e.screenX;
			if (e.touches) {
				if (e.touches[0]) {
					touchEnd = e.touches[0].screenX;
				}
			}
			if (e.changedTouches) {
				if (e.changedTouches[0]) {
					touchEnd = e.changedTouches[0].screenX;
				}
			}
			this.setState({
				end: touchEnd
			});
    }

		reTouchable() {
			this.setState({
				touchable: true
			});
		}

		resetTouch() {
			this.setState({
				start: null,
				end: null,
				touchable: false
			});
			setTimeout(() => {
				if (!this.state.touchable) {
					this.reTouchable();
				}}
			, 200);
		}

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
			return <div
									// onTouchStart={this.handleChange}
									onTouchStart={this.onStart}
									onMouseDown={this.onStart}
									onTouchEnd={this.onEnd}
									onMouseUp={this.onEnd}
								>
								<WrappedComponent 
									resetTouch={this.resetTouch} 
									{...this.state} 
								/>
							</div>
							;
    }
  };
}