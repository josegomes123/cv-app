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
	}

	emailHandler = (email) => {
		this.setState({ email: email});
	};


	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<NameInput nameHandler="" onClick={console.log(this.state)}></NameInput>
				<SmallBio></SmallBio>
				<Location></Location>
				<Phone></Phone>
				<Email emailHandler={this.emailHandler}></Email>
				<LinkedIn></LinkedIn>
				<Github></Github>
				<button type="submit" form="cvForm"></button>
			</div>
		);
	}
}

export default CV;
