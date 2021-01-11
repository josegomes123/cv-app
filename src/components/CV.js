import React, { Component } from 'react';
import NameInput from './cv-components/NameInput';
import SmallBio from './cv-components/SmallBio';
import Email from './cv-components/Email';
import Github from './cv-components/Github';
import LinkedIn from './cv-components/LinkedIn';
import Location from './cv-components/Location';
import Phone from './cv-components/Phone';
import Photo from './cv-components/Photo';

class CV extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			bio: '',
			location: '',
			email: '',
			phone: '',
			linkedin: '',
			github: '',
			experience: [],
			academic: [],
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		let value = event.target.value;
		let key = event.target.name;
		this.setState({
			[key]: value,
		});
		console.log(this.state);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<form className="grid grid-cols-2 m-6">
					<Photo></Photo>
					<NameInput
						value={this.state.name}
						handleInput={this.handleInputChange}
					></NameInput>
					<div className="justify-self-end">
						<Location
							value={this.state.location}
							handleInput={this.handleInputChange}
						></Location>
						<Phone
							value={this.state.phone}
							handleInput={this.handleInputChange}
						></Phone>
						<Email
							value={this.state.email}
							handleInput={this.handleInputChange}
						></Email>
						<LinkedIn
							value={this.state.linkedin}
							handleInput={this.handleInputChange}
						></LinkedIn>
						<Github
							value={this.state.github}
							handleInput={this.handleInputChange}
						></Github>
					</div>
					<SmallBio
						value={this.state.bio}
						handleInput={this.handleInputChange}
					></SmallBio>

					<input type="submit" value="submit"></input>
				</form>
			</div>
		);
	}
}

export default CV;
