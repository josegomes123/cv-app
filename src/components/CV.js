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
import Experience from './cv-components/Experience';
import { MdSend } from 'react-icons/md';
import Skills from './cv-components/Skills';

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
			// needs default blank object for initial render
			experience: [
				{
					id: 0,
					company: '',
					position: '',
					startDate: '',
					endDate: '',
					jobDescription: '',
				},
			],
			// needs default blank object for initial render
			education: [
				{
					id: 0,
					school: '',
					degree: '',
					startDate: '',
					endDate: '',
				},
			],
			skills: [],
			edCount: 0,
			expCount: 0,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleEducationChange = this.handleEducationChange.bind(this);
		this.handleExperienceChange = this.handleExperienceChange.bind(this);
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

	handleEducationChange(inputBlock) {
		const updatedEdBlock = this.state.education.map((obj) => {
			return inputBlock.id === obj.id ? inputBlock : obj;
		});
		this.setState({
			education: updatedEdBlock,
		});
		console.log(this.state);
	}

	handleEducationAdd = () => {
		this.setState({
			education: this.state.education.concat({
				id: this.state.edCount + 1,
				school: '',
				degree: '',
				startDate: '',
				endDate: '',
			}),
		});
		this.setState({
			edCount: this.state.edCount + 1,
		});
	};

	handleEducationDelete = (id) => {
		console.log(`deleting education block with ID ${id}`);
		this.setState((prevState) => ({
			education: prevState.education.filter((edBlock) => edBlock.id !== id),
		}));
	};

	handleExperienceChange(inputBlock) {
		const updatedExpBlock = this.state.experience.map((obj) => {
			return inputBlock.id === obj.id ? inputBlock : obj;
		});
		this.setState({
			experience: updatedExpBlock,
		});
		console.log(this.state);
	}

	handleExperienceAdd = () => {
		this.setState({
			experience: this.state.experience.concat({
				id: this.state.expCount + 1,
				company: '',
				position: '',
				startDate: '',
				endDate: '',
				jobDescription: '',
			}),
		});
		this.setState({
			expCount: this.state.expCount + 1,
		});
	};

	handleExperienceDelete = (id) => {
		console.log(`deleting experience block with ID ${id}`);
		this.setState((prevState) => ({
			experience: prevState.experience.filter((expBlock) => expBlock.id !== id),
		}));
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
					<div className="col-start-9 col-end-11 row-start-1 row-end-3 justify-self-end">
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
						educationList={this.state.education}
						handleInput={this.handleEducationChange}
						add={this.handleEducationAdd}
						del={this.handleEducationDelete}
					></Education>
					<Experience
						experienceList={this.state.experience}
						handleInput={this.handleExperienceChange}
						add={this.handleExperienceAdd}
						del={this.handleExperienceDelete}
					></Experience>
					<Skills
						skillList={this.state.skills}
						handleInput={this.handleSkillChange}
						add={this.handleSkillAdd}
						del={this.handleSkillDelete}
					></Skills>

					<button
						className="col-start-1 col-end-11 place-self-center my-12 font-medium transform border border-blue-200 bg-blue-200 text-blue-700 shadow rounded-md px-5 py-2 m-2 transition duration-150 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline active:scale-95"
						type="submit"
					>
						<MdSend className="text-2xl mr-2 inline align-top"></MdSend>Submit
					</button>
				</div>
			</div>
		);
	}
}

export default CV;
