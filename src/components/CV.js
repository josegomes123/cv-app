import React, { Component } from 'react';
import NameInput from './cv-components/NameInput';
import SmallBio from './cv-components/SmallBio';
import PersonalInfo from './cv-components/PersonalInfo';
import Email from './cv-components/Email';
import Github from './cv-components/Github';
import LinkedIn from './cv-components/LinkedIn';
import Location from './cv-components/Location';
import Phone from './cv-components/Phone';

class CV extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			bio: '',
			location: '',
			phone: '',
			linkedin: '',
			github: '',
			experience: [],
			academic: [],
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(key, value) {
		this.setState({
			[key]: value,
		});
		console.log(this.state);
	}

	emailHandler = (email) => {
		this.setState({ email: email });
	};

	linkedinHandler = (linkedin) => {
		this.setState({ linkedin: linkedin });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<form>
				<NameInput handleInput={this.handleInputChange}></NameInput>
				<SmallBio handleInput={this.handleInputChange}></SmallBio>
				<Location handleInput={this.handleInputChange}></Location>
				<Phone handleInput={this.handleInputChange}></Phone> 
				<Email
					handleInput={this.handleInputChange}
				></Email>
				<LinkedIn
					handleInput={this.handleInputChange}
				></LinkedIn>
				<Github handleInput={this.handleInputChange}></Github>
				<input type="submit" value="submit" >
				</input>
				</form>
			</div>
		);
	}
}

export default CV;
