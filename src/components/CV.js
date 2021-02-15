import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
import { MdSend, MdFileDownload } from 'react-icons/md';
import Skills from './cv-components/Skills';
import generatePDFDocument from './helpers/GeneratePDF';
import { PreviewModeContext } from './helpers/PreviewModeContext';
import cvTemplateTest from './helpers/cvTemplateTest';
import Sidebar from './sidebar/Sidebar';

class CV extends Component {
	constructor(props) {
		super(props);
		this.form = React.createRef();
		this.state = {
			photo: '',
			name: '',
			bio: '',
			location: '',
			email: '',
			phone: '',
			linkedin: '',
			github: '',
			// needs default blank object for initial render
			experience: [],
			// needs default blank object for initial render
			education: [],
			skills: [],
			previewMode: false,
			edCount: 0,
			expCount: 0,
			load: false,
			submitStatus: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleEducationChange = this.handleEducationChange.bind(this);
		this.handleExperienceChange = this.handleExperienceChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.loadTemplateCV = this.loadTemplateCV.bind(this);
	}

	static contextType = PreviewModeContext;

	loadTemplateCV(cvData) {
		this.setState(cvData);
	}

	componentDidMount() {
		localStorage.clear(); // to clear cached photo
		window.setTimeout(this.setStartLoading.bind(this), 2000);
	}

	setStartLoading() {
		this.setState({ load: true });
	}

	// General Input Fields Features
	handleInputChange(event) {
		let value = event.target.value;
		let key = event.target.name;
		this.setState({
			[key]: value,
		});
	}

	handlePhotoUpload = (img) => {
		this.setState({
			photo: img,
		});
	};

	/**
	 * Education Manipulation Features
	 */
	handleEducationChange(inputBlock) {
		const updatedEdBlock = this.state.education.map((obj) => {
			return inputBlock.id === obj.id ? inputBlock : obj;
		});
		this.setState({
			education: updatedEdBlock,
		});
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
		this.setState((prevState) => ({
			education: prevState.education.filter((edBlock) => edBlock.id !== id),
		}));
	};

	/**
	 * Experience Manipulation Features
	 */
	handleExperienceChange(inputBlock) {
		const updatedExpBlock = this.state.experience.map((obj) => {
			return inputBlock.id === obj.id ? inputBlock : obj;
		});
		this.setState({
			experience: updatedExpBlock,
		});
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
		this.setState((prevState) => ({
			experience: prevState.experience.filter((expBlock) => expBlock.id !== id),
		}));
	};

	/**
	 * Skill Manipulation Features
	 */
	handleSkillAdd = (skillAdd, idAdd) => {
		this.setState({
			skills: this.state.skills.concat({ skillName: skillAdd, id: idAdd }),
		});
	};

	handleSkillDelete = (id) => {
		this.setState((prevState) => ({
			skills: prevState.skills.filter(
				(skillBlock) => skillBlock.id !== parseInt(id)
			),
		}));
	};

	handleSubmit(event) {
		if (event == undefined) {
			// event = this.form.dispatchEvent(new Event('submit'));
		} else {
			event.preventDefault();
			event.stopPropagation();
			this.setState({ previewMode: true });
			this.setState({ submitStatus: true });
		}

	}

	render() {
		const { previewMode } = this.context;
		return (
				<form className="flex flex-column" onSubmit={this.handleSubmit}>
					<div className="flex-grow">
						<div
							id="full-cv"
							className="grid items-center place-content-center grid-cols-10 auto-cols-min grid-flow-row-dense auto-rows-min m-6"
						>
							<div className="flex flex-row flex-shrink-0 col-start-1 col-span-full row-start-1 justify-between">
								<Photo
									handleInput={this.handlePhotoUpload}
									previewMode={previewMode}
								></Photo>
								<div className="w-full">
									<NameInput
										value={this.state.name}
										handleInput={this.handleInputChange}
										previewMode={previewMode}
									></NameInput>
									<SmallBio
										value={this.state.bio}
										handleInput={this.handleInputChange}
										previewMode={previewMode}
									></SmallBio>
								</div>
								{/* // className="col-start-9 col-end-11 row-start-1 row-end-3 justify-self-end" */}
								<div className="place-self-end flex-shrink-0">
									<Location
										value={this.state.location}
										handleInput={this.handleInputChange}
										previewMode={previewMode}
									></Location>
									<Phone
										value={this.state.phone}
										handleInput={this.handleInputChange}
										previewMode={previewMode}
									></Phone>
									<Email
										value={this.state.email}
										handleInput={this.handleInputChange}
										previewMode={previewMode}
									></Email>
									<LinkedIn
										value={this.state.linkedin}
										handleInput={this.handleInputChange}
										previewMode={previewMode}
									></LinkedIn>
									<Github
										value={this.state.github}
										handleInput={this.handleInputChange}
										previewMode={previewMode}
									></Github>
								</div>
							</div>
							<Education
								educationList={this.state.education}
								handleInput={this.handleEducationChange}
								add={this.handleEducationAdd}
								del={this.handleEducationDelete}
								previewMode={previewMode}
							></Education>
							<Experience
								experienceList={this.state.experience}
								handleInput={this.handleExperienceChange}
								add={this.handleExperienceAdd}
								del={this.handleExperienceDelete}
								previewMode={previewMode}
							></Experience>
							<Skills
								skillList={this.state.skills}
								add={this.handleSkillAdd}
								del={this.handleSkillDelete}
								previewMode={previewMode}
							></Skills>
						</div>
					</div>
					<Sidebar
						cvData={this.state}
						submitStatus={this.state.submitStatus}
						handleSubmit={this.handleSubmit}
						handler={this.loadTemplateCV}
					></Sidebar>
				</form>

		);
	}
}

export default CV;
