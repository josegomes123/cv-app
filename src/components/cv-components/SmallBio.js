import React, { Component } from 'react';

export class SmallBio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bio: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			bio: event.target.value,
		});
		this.props.handleInput(Object.keys(this.state)[0], this.state.bio);
	};

	render() {
		return (
			<div className="m-3">
				<textarea
					className="w-1/2  bg-gray-100 inline-block text-xs p-2 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
					type="text"
					placeholder="Small bio about yourself here"
					value={this.state.bio}
					onChange={this.handleChange}
					rows="3"
				></textarea>
			</div>
		);
	}
}

export default SmallBio;
