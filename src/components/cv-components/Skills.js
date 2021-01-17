import React, { Component } from 'react';
import { FaTools } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';

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
			this.props.handleData(this.state.skillName, this.state.id);
			this.setState({ skillName: '', id: this.state.id + 1 });
		}
	};

	handleDelete = (event) => {
		this.props.handleDelete(event.target.id);
	};

	handleChange = (event) => {
		this.setState({
			skillName: event.target.value,
		});
	};

	render(props) {
		const { skillList, handleInput, add, del } = this.props;
		const sList = this.props.skillList.map((skillBlock) => {
			return (
				<ul key={skillBlock.id}>
					{skillBlock.skillName}
					<MdDeleteForever
						onClick={() => this.deleteBlock()}
						className="text-2xl mr-2 inline align-top"
					></MdDeleteForever>
				</ul>
			);
		});

		return (
			<div className="row-start-12 row-end-auto row-auto col-start-1 col-end-11">
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
					<div className="m-2 grid grid-cols-3 grid-rows-3 place-content-start auto-rows-auto">
						<input
							className="col-start-1 col-span-3 h-10 row-start-1 pl-2 m-1 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-300"
							type="text"
							name="skill"
							placeholder="Your skill here"
							value={this.state.skillName}
							onChange={this.handleChange}
							required
						></input>
						{sList}
						<button
							onClick={add}
							className="transform border border-gray-200 bg-gray-200 text-gray-700 shadow rounded-md px-3 py-2 m-2 transition duration-150 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline active:scale-95"
						>
							<IoMdAddCircle className="text-2xl inline align-middle" /> Add
							More
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
