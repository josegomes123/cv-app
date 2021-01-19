import React, { Component } from 'react';
import { FaTools } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { ImCross } from 'react-icons/im';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skillName: '',
			id: 0,
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.skillName !== '') {
			this.props.add(this.state.skillName, this.state.id);
			this.setState({ skillName: '', id: this.state.id + 1 });
		}
	};

	handleDelete(event) {
		console.log(event);
		this.props.del(event.target.id);
		this.setState({ skillName: '' });
	}

	handleChange = (event) => {
		this.setState({
			skillName: event.target.value,
		});
	};

	// To add skills with enter key
	onKeyDown = (event) => {
		// 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
		if (event.key === 'Enter') {
			event.preventDefault();
			event.stopPropagation();
			this.handleSubmit(event);
		}
	};

	renderSkillList = () => {
		const skillList = this.props.skillList;
		const del = this.props.del;
		const sList = skillList.map((skillBlock) => {
			return (
				<li key={skillBlock.id}>
					{skillBlock.skillName}
					<button
						id={skillBlock.id}
						onClick={this.handleDelete.bind(this)}
						className="outline-none focus:outline-none transform transition align-top hover:text-red-700  duration-150 ease select-none hover:text-2xl hover:scale-125 active:scale-90"
					>
						<ImCross className="pointer-events-none cursor-pointer text-xs ml-2 inline align-baseline"></ImCross>
					</button>
				</li>
			);
		});
		return (
			<ul className="flex flex-col max-h-40 flex-wrap  col-start-1 col-span-5 row-start-2 row-span-2 ml-6 text-lg list-disc">
				{sList}
			</ul>
		);
	};

	render() {
		return (
			<div className="mt-4 row-start-12 row-end-auto row-auto col-start-1 col-end-11">
				<div className="">
					<div>
						<FaTools className="inline w-12 h-12 m-2"></FaTools>
						<h1 className="inline align-middle text-3xl font-bold">Skills</h1>
						<label className="inline-flex items-center mt-3">
							<input
								type="checkbox"
								className="form-checkbox h-5 w-5 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-300"
							/>
							<span className="ml-2 font-medium text-black">Show in CV</span>
						</label>
					</div>
					<hr className="border-0 bg-gray-500 text-gray-500 h-px m-1"></hr>
					<div className="m-2 grid grid-cols-5 grid-rows-3 place-content-start auto-rows-fr">
						<input
							className="col-start-1 col-span-4 row-start-1 pl-2 h-12 mb-6 m-1 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-300"
							type="text"
							name="skill"
							placeholder="Your skill here"
							value={this.state.skillName}
							onChange={this.handleChange}
							onKeyDown={this.onKeyDown}
						></input>
						<button
							onClick={this.handleSubmit}
							className="col-start-5 row-start-1 col-span-1 transform border border-gray-200 h-10 bg-gray-200 text-gray-700 shadow rounded-md px-3 py-2 m-2 transition duration-150 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline active:scale-95"
						>
							<IoMdAddCircle className="text-2xl inline align-middle" /> Add
							More
						</button>
						{this.renderSkillList()}
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
