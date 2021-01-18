import React from 'react';
import { MdSchool } from 'react-icons/md';
import EducationBlock from './EducationBlock';
import { IoMdAddCircle } from 'react-icons/io';

function Education({ educationList, handleInput, add, del }) {
	// const { educationList, handleInput, add, del } = this.props;
	const edList = educationList.map((edBlock) => (
		<EducationBlock
			key={edBlock.id}
			handleInput={handleInput}
			value={edBlock}
			handleDelete={del}
		></EducationBlock>
	));

	return (
		<div className="row-start-3 row-end-auto row-auto col-start-1 col-end-11">
			<div className="">
				<div>
					<MdSchool className="inline w-12 h-12 m-2"></MdSchool>
					<h1 className="inline align-middle text-3xl font-bold">Education</h1>
				</div>

				<hr className="border-0 bg-gray-500 text-gray-500 h-px m-1"></hr>
				{edList}
				<button
					onClick={add}
					className="transform border border-gray-200 bg-gray-200 text-gray-700 shadow rounded-md px-3 py-2 m-2 transition duration-150 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline active:scale-95"
				>
					<IoMdAddCircle className="text-2xl inline align-middle" /> Add More
				</button>
			</div>
		</div>
	);
}

export default Education;
