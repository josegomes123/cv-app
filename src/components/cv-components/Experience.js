import React from 'react';
import { MdWork } from 'react-icons/md';
import ExperienceBlock from './ExperienceBlock';
import { IoMdAddCircle } from 'react-icons/io';

function Experience({ experienceList, handleInput, add, del, previewMode }) {
	const expList = experienceList.map((expBlock) => (
		<ExperienceBlock
			key={expBlock.id}
			handleInput={handleInput}
			value={expBlock}
			handleDelete={del}
			previewMode={previewMode}
		></ExperienceBlock>
	));

	// only render if there are experience blocks
	if (experienceList.length === 0 && previewMode) {
		return null;
	} else if (previewMode) {
		return (
			<div className="mt-4 row-start-12 row-end-auto row-auto col-start-1 col-end-11">
				<div className="">
					<div>
						<MdWork className="inline w-12 h-12 m-2"></MdWork>
						<h1 className="inline align-middle text-3xl font-bold">
							Experience
						</h1>
					</div>
					<hr className="border-0 bg-gray-500 text-gray-500 h-px m-1"></hr>
					{expList}
				</div>
			</div>
		);
	} else {
		return (
			<div className="mt-4 row-start-12 row-end-auto row-auto col-start-1 col-end-11">
				<div className="">
					<div>
						<MdWork className="inline w-12 h-12 m-2"></MdWork>
						<h1 className="inline align-middle text-3xl font-bold">
							Experience
						</h1>
					</div>
					<hr className="border-0 bg-gray-500 text-gray-500 h-px m-1"></hr>
					{expList}
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
}

export default Experience;
