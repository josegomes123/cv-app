import React, { Component } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';

export class LinkedIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			linkedin: '',
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.linkedin !== '') {
			// this.props.linkedinHandler(this.state.linkedin);
			this.props.onSubmit(event, this.state.linkedin);
		}
	};

	handleChange = (event) => {
		this.setState({
			linkedin: event.target.value,
		});
		this.props.handleInput(Object.keys(this.state)[0], this.state.linkedin);
	}



	render() {
		return (
			<div className="flex flex-column items-right m-1">
				<AiFillLinkedin className="text-xl m-2" />
					<input
						className="pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
						type="url"
						name="linkedin"
						placeholder="Your LinkedIn here"
						value={this.state.linkedin}
						onChange={this.handleChange}
					></input>
			</div>
		);
	}
}

export default LinkedIn;
