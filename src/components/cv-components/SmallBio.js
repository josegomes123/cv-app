import React, { Component } from 'react';

export class SmallBio extends Component {
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
				<div className="m-3">
					<form id="cvform">
						<textarea
							className="w-1/2  inline-block text-xs p-2 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
							type="text"
							placeholder="Small bio about yourself here"
							value={this.state.task}
							onChange={this.handleChange}
							rows="3"
						></textarea>
					</form>
				</div>
		);
	}
}

export default SmallBio;
