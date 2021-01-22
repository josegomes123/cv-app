import React, { Component } from 'react';
import { MdDeleteForever } from 'react-icons/md';

class EducationBlock extends Component {
	constructor(props) {
		super(props);
		this.deleteBlock = this.deleteBlock.bind(this);
		this.state = {
			id: this.props.value.id,
			school: this.props.value.school,
			degree: this.props.value.degree,
			startDate: this.props.value.startDate,
			endDate: this.props.value.endDate,
		};
	}

	deleteBlock() {
		this.props.handleDelete(this.state.id);
	}

	handleInput = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		this.props.handleInput(this.state);
	};

	formatDate(date, withDays) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
		if (withDays) {
			return [year, month, day].join('-');
		} else {
			return [year, month].join('/');
		}
	}

	render() {
		const { school, degree, startDate, endDate } = this.state;
		if (this.props.previewMode) {
			return (
				<div className="pl-4 pt-2 grid grid-rows-2 grid-cols-1">
					<div className="row-start-1">
						<p className="text-2xl inline mr-10">{school}</p>
						<p className="inline font-medium text-2xl">{degree}</p>
					</div>
					<div className="w-full col-span-full">
						<p className="">
							{this.formatDate(startDate, false)} -{' '}
							{this.formatDate(startDate, false)}
						</p>
					</div>
				</div>
			);
		} else {
			return (
				<div className="m-2 grid grid-cols-3 grid-rows-3">
					<input
						className="col-start-1 col-span-3 row-start-1 pl-2 m-1 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-300"
						type="text"
						name="school"
						placeholder="Your school here"
						value={school}
						onChange={this.handleInput}
						required
					></input>
					<input
						className="col-start-1 col-span-3 row-start-2 pl-2 m-1 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-300"
						type="text"
						name="degree"
						placeholder="Your degree here"
						value={degree}
						onChange={this.handleInput}
						required
					></input>
					<div className="col-start-4 row-start-1 justify-self-end">
						<label className="mx-2" htmlFor="start">
							Start date:
						</label>
						<input
							className="pl-2 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500  focus:outline-none focus:ring focus:border-blue-300"
							type="date"
							id="start"
							name="startDate"
							value={startDate}
							onChange={this.handleInput}
							max={new Date()}
							required
						></input>
					</div>
					<div className="col-start-4 row-start-2 justify-self-end">
						<label className="mx-2" htmlFor="end">
							End date:
						</label>
						<input
							className="ml-2 pl-2 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-300"
							type="date"
							id="end"
							name="endDate"
							value={endDate}
							onChange={this.handleInput}
							max={new Date()}
						></input>
					</div>
					<button
						className="col-start-4 row-start-3 justify-self-end
				 align-middle transform border border-red-200 bg-red-200  text-red-700 font-medium shadow rounded-md px-3 py-2 m-2 transition duration-150 ease select-none hover:bg-red-300 focus:outline-none focus:shadow-outline active:scale-95"
						onClick={() => this.deleteBlock()}
					>
						<MdDeleteForever className="text-2xl mr-2 inline align-top"></MdDeleteForever>
						Delete
					</button>
				</div>
			);
		}
	}
}

export default EducationBlock;
