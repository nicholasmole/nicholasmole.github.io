// import {Provider} from 'preact-redux';
import {h, Component, render} from 'preact';
import App from './containers/app';
import './css/utils/global.scss';
// import {createStore} from 'redux';
// import reducer from './ducks/root';

// const store = createStore(reducer);

render(
	<App/>,
	document.getElementById('root')
);
