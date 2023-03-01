import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
	render() {
		return (
			<h1>Hello World!</h1>
		);
	}
}

if (document.getElementById('example')) {
	ReactDOM.render(<Example />, document.getElementById('example'));
}