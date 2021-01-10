import React, { Component } from 'react';

export class NameInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			name: event.target.value,
		});
		this.props.handleInput(Object.keys(this.state)[0], this.state.name);
	}


	render() {
		return (
			<div className="m-3 col-span-1">
					<input
						className="w-1/2  inline-block text-2xl p-2 rounded border bg-gray-100  block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
						type="text"
						placeholder="Input your name here"
						value={this.state.name}
						onChange={this.handleChange}
					 required></input>
			</div>
		);
	}
}

export default NameInput;
