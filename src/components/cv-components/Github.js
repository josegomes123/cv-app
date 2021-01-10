import React, { Component } from 'react';
import { GoMarkGithub } from 'react-icons/go';

export class Github extends Component {
	constructor(props) {
		super(props);
		this.state = {
			github: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			github: event.target.value,
		});
		this.props.handleInput(Object.keys(this.state)[0], this.state.github);
	};
	render() {
		return (
			<div className="flex flex-column items-right m-1">
				<GoMarkGithub className="text-xl m-2" />
				<input
					className="pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
					type="url"
					placeholder="Your Github Profile"
					value={this.state.github}
					onChange={this.handleChange}
				></input>
			</div>
		);
	}
}

export default Github;
