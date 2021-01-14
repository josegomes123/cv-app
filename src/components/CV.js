import React, { Component } from 'react';
import NameInput from './cv-components/NameInput';
import SmallBio from './cv-components/SmallBio';
import Email from './cv-components/Email';
import Github from './cv-components/Github';
import LinkedIn from './cv-components/LinkedIn';
import Location from './cv-components/Location';
import Phone from './cv-components/Phone';
import Photo from './cv-components/Photo';
import Education from './cv-components/Education';

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
			education: [],
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
				<div className="grid items-center place-content-center grid-cols-10 auto-cols-min grid-flow-row-dense auto-rows-auto m-6">
					<Photo></Photo>
					<NameInput
						value={this.state.name}
						handleInput={this.handleInputChange}
					></NameInput>
					<div className="col-start-9 col-end-11 row-start-1 row-end-3">
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
					<Education
						handleInput={this.handleInputChange}
					></Education>

					<input
						className="col-start-1 col-end-11 row-start-6 transform border border-gray-200 bg-gray-200 text-gray-700 shadow rounded-md px-3 py-2 m-2 transition duration-150 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline active:scale-95"
						type="submit"
						value="submit"
					></input>
				</div>
			</div>
		);
	}
}

export default CV;
