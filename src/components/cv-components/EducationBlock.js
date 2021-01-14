import React, { Component } from 'react';
import { MdDeleteForever } from 'react-icons/md';

class EducationBlock extends Component {
	constructor(props) {
		super(props);
		this.deleteBlock = this.deleteBlock.bind(this);
		this.state = {
			id: props.id,
			school: props.school,
			degree: props.degree,
			startdate: props.startDate,
			enddate: props.endDate,
		};
	}

	deleteBlock() {
		this.props.handleDelete(this.state.id);
	}

	handleInput = (event) => {
		this.setState({
			[event.name]: event.target.value,
		});
		// this.props.handleInput
	};

	formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}

	render() {
		const { id, school, degree, startDate, endDate } = this.state;
		return (
			<div className="m-2 grid grid-cols-3 grid-rows-3">
				<input
					className="col-start-1 col-span-3 row-start-1 pl-2 m-1 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
					type="text"
					name="school"
					placeholder="Your school here"
					value={school}
					onChange={this.handleInput}
					required
				></input>
				<input
					className="col-start-1 col-span-3 row-start-2 pl-2 m-1 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
					type="text"
					name="degree"
					placeholder="Your degree here"
					value={degree}
					onChange={this.handleInput}
					required
				></input>
				<div className="col-start-4 row-start-1 justify-self-end">
					<label className="mx-2" for="start">
						Start date:
					</label>
					<input
						className="pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
						type="date"
						id="start"
						name="startDate"
						value={startDate}
						onChange={this.handleInput}
						max={this.formatDate(new Date())}
						required
					></input>
				</div>
				<div  className="col-start-4 row-start-2 justify-self-end">
					<label className="mx-2" for="end">
						End date:
					</label>
					<input
						className="ml-2 pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
						type="date"
						id="end"
						name="endDate"
						value={endDate}
						onChange={this.handleInput}
						max={this.formatDate(new Date())}
					></input>
				</div>
				<button
					className="col-start-4 row-start-3 justify-self-end
			 align-middle transform border border-gray-200 bg-gray-200 text-gray-700 shadow rounded-md px-3 py-2 m-2 transition duration-150 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline active:scale-95"
					onClick={() => this.deleteBlock()}
				>
					<MdDeleteForever className="text-2xl inline align-middle"></MdDeleteForever>Delete
					
				</button>
			</div>
		);
	}
}

export default EducationBlock;
