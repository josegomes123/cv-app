import React, { Component } from 'react';
import { AiFillPhone } from 'react-icons/ai';

export class Phone extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phone: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			phone: event.target.value,
		});
		this.props.handleInput(Object.keys(this.state)[0], this.state.phone);
	};

	render() {
		return (
			<div className="flex flex-column items-right m-1">
				<AiFillPhone className="text-xl m-2" />
				<input
					className="pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
					type="tel"
					pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
					placeholder="Your phone here"
					value={this.state.location}
					onChange={this.handleChange}
				></input>
			</div>
		);
	}
}

export default Phone;
