import React from 'react';
import { MdSchool } from 'react-icons/md';

function Education() {
	return (
		<div className="row-start-3 col-start-1 col-end-11">
			<div className="flex flex-row items-center">
				<MdSchool className="w-12 h-12 m-2"></MdSchool>
				<h1 className="text-3xl font-bold">Education</h1>
				<hr class="border-0 bg-gray-500 text-gray-500 h-px"></hr>
			</div>
		</div>
	);
}

export default Education;
