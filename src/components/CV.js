import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
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
			experience: [],
			// needs default blank object for initial render
			education: [],
			skills: [],
			previewMode: false,
			edCount: 0,
			expCount: 0,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleEducationChange = this.handleEducationChange.bind(this);
		this.handleExperienceChange = this.handleExperienceChange.bind(this);
	}

	testFullCV = () => {
		this.setState({
			name: 'José Afonso Fanha Gomes',
			bio:
				"Aspiring Web / Software developer, excited to learn and work with new technologies. Familiar with Java, Javascript, React, Webpack, Git, Bootstrap.\n\nEver since I remember I've been interested in all things technology, including various personal projects where I created and ran online communities, developed skills in Video Editing, content creation, online branding and Programming as a hobby.Previous experience gave me a good framework for working and dealing with people in high-intensity fast-paced environments and attending to the needs of customers, which I hope to ally with my technical abilities and keep improving in every aspect. ",
			location: 'Lisbon',
			email: 'zegomes@gmail.com',
			phone: '911800891',
			linkedin: 'https://github.com/ze-gomes',
			github: 'https://github.com/ze-gomes',
			experience: [
				{
					id: 0,
					position: 'Assistente de Operações em Escala - Airside',
					company: 'TAP Air Portugal',
					startDate: '2021-01-05',
					endDate: '',
					jobDescription:
						'Coordernação de todo o processo de boarding dos voos da TAP com as várias equipas envolvidas e garantir a qualidade e eficiência do mesmo. Resolver problemas associados com cancelamentos, atrasos e os demais decorrentes da operação aeroportuária e encontrar soluções para os passageiros afetados.',
				},
				{
					id: 1,
					position: 'Técnico de Controlo de Qualidade - Cliente',
					company: 'Portugal Telecom',
					startDate: '2021-01-12',
					endDate: '2020-10-13',
					jobDescription: '',
				},
			],
			education: [
				{
					id: 0,
					school: 'Instituto Superior Técnico',
					degree: 'Licenciatura em Engenharia Informática e de Computadores',
					startDate: '2020-11-11',
					endDate: '2020-10-22',
				},
				{
					id: 1,
					school: 'ISCTE - Instituto Universitário de Lisboa',
					degree: 'Programa UPskill - Java Developer',
					startDate: '2020-09-09',
					endDate: '2020-09-22',
				},
			],
			skills: [
				{
					skillName: 'HTML',
					id: 0,
				},
				{
					skillName: 'CSS',
					id: 1,
				},
				{
					skillName: 'Bootstrap',
					id: 2,
				},
				{
					skillName: 'ReactJS',
					id: 3,
				},
				{
					skillName: 'TailwindCSS',
					id: 4,
				},
				{
					skillName: 'English',
					id: 5,
				},
				{
					skillName: 'Webpack',
					id: 6,
				},
				{
					skillName: 'Javascript',
					id: 7,
				},
				{
					skillName: 'Java',
					id: 8,
				},
			],
			previewMode: true,
			edCount: 1,
			expCount: 1,
		});
	};

	// renderInfoBox = () => {

	// }

	// General Input Fields Features
	handleInputChange(event) {
		let value = event.target.value;
		let key = event.target.name;
		this.setState({
			[key]: value,
		});
	}

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
		console.log(`deleting education block with ID ${id}`);
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
		console.log(`deleting experience block with ID ${id}`);
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
		console.log(this.state.skills);
	};

	handleSkillDelete = (id) => {
		console.log(`deleting skill block with ID ${id}`);
		this.setState((prevState) => ({
			skills: prevState.skills.filter(
				(skillBlock) => skillBlock.id !== parseInt(id)
			),
		}));
		console.log(this.state.skills);
	};

	/**
	 * Education Manipulation Features
	 */
	handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
		console.log(this.state);
		this.setState({ previewMode: true });
		// Default export is a4 paper, portrait, using millimeters for units
		// this.generatePDF();
	};

	generatePDF = () => {
		var doc = new jsPDF('p', 'mm', 'a4');
		// doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
		// doc.save('myDocument.pdf');
		html2canvas(document.querySelector('#full-cv')).then((canvas) => {
			const imgData = canvas.toDataURL('image/jpeg');
			const pdf = new jsPDF('p', 'pt', 'a4');
			var options = { pagesplit: true };
			const imgProps = pdf.getImageProperties(imgData);
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = pdf.internal.pageSize.height;
			pdf.addImage(imgData, 'JPEG', 15, 15, pdfWidth,pdfHeight, 'cv', 'NONE');
			pdf.save('download.pdf', options);
		});
		// doc.html(ReactDOMServer.renderToStaticMarkup(this.render()), {
		// 	callback: function (doc) {
		// 	  doc.save();
		// 	},
		// 	x: 10,
		// 	y: 10
		//  });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div
						id="full-cv"
						className="grid items-center place-content-center grid-cols-10 auto-cols-min grid-flow-row-dense auto-rows-auto m-6"
					>
						<div className="flex flex-row flex-shrink-0 col-start-1 col-span-full row-start-1 justify-between">
							<Photo previewMode={this.state.previewMode}></Photo>
							<div className="w-full">
								<NameInput
									value={this.state.name}
									handleInput={this.handleInputChange}
									previewMode={this.state.previewMode}
								></NameInput>
								<SmallBio
									value={this.state.bio}
									handleInput={this.handleInputChange}
									previewMode={this.state.previewMode}
								></SmallBio>
							</div>
							{/* // className="col-start-9 col-end-11 row-start-1 row-end-3 justify-self-end" */}
							<div className="place-self-end flex-shrink-0">
								<Location
									value={this.state.location}
									handleInput={this.handleInputChange}
									previewMode={this.state.previewMode}
								></Location>
								<Phone
									value={this.state.phone}
									handleInput={this.handleInputChange}
									previewMode={this.state.previewMode}
								></Phone>
								<Email
									value={this.state.email}
									handleInput={this.handleInputChange}
									previewMode={this.state.previewMode}
								></Email>
								<LinkedIn
									value={this.state.linkedin}
									handleInput={this.handleInputChange}
									previewMode={this.state.previewMode}
								></LinkedIn>
								<Github
									value={this.state.github}
									handleInput={this.handleInputChange}
									previewMode={this.state.previewMode}
								></Github>
							</div>
						</div>
						<Education
							educationList={this.state.education}
							handleInput={this.handleEducationChange}
							add={this.handleEducationAdd}
							del={this.handleEducationDelete}
							previewMode={this.state.previewMode}
						></Education>
						<Experience
							experienceList={this.state.experience}
							handleInput={this.handleExperienceChange}
							add={this.handleExperienceAdd}
							del={this.handleExperienceDelete}
							previewMode={this.state.previewMode}
						></Experience>
						<Skills
							skillList={this.state.skills}
							add={this.handleSkillAdd}
							del={this.handleSkillDelete}
							previewMode={this.state.previewMode}
						></Skills>

						<button
							className="col-start-1 col-end-11 place-self-center mb-12 font-medium transform border border-blue-200 bg-blue-200 text-blue-700 shadow rounded-md px-5 py-2 m-2 transition duration-150 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline active:scale-95"
							type="submit"
						>
							<MdSend className="text-2xl mr-2 inline align-top"></MdSend>Submit
						</button>

						<button
							className="col-start-1 col-end-11 place-self-center mb-12 font-medium transform border border-blue-200 bg-blue-200 text-blue-700 shadow rounded-md px-5 py-2 m-2 transition duration-150 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline active:scale-95"
							onClick={() => this.testFullCV()}
						>
							<MdSend className="text-2xl mr-2 inline align-top"></MdSend>TEST
							CV
						</button>
						<button onClick={() => this.generatePDF()}>GEN PDF</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CV;
