import React, { Component } from 'react';
import { GoMarkGithub } from 'react-icons/go';

export class Github extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
		};
	}

	// handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	if (this.state.task !== '') {
	// 		this.props.handleData(this.state.task, this.state.id);
	// 		this.setState({ task: '', id: this.state.id + 1 });
	// 	}
	// };

	handleChange = (event) => {
		this.setState({
			task: event.target.value,
		});
	};

	render() {
		return (
			<div className="flex flex-column items-right m-1">
				<GoMarkGithub className="text-xl m-2" />
				<form id="cvform">
					<input
						className="pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
						type="text"
						placeholder="Your Github Profile"
						value={this.state.task}
						onChange={this.handleChange}
					></input>
				</form>
			</div>
		);
	}
}

export default Github;
