import React from 'react';
import { FaUniversity } from 'react-icons/fa';

function Education() {
	return (
		<div className="row-start-3 col-start-1 col-end-11">
			<div className="flex flex-row items-center">
				<FaUniversity className="w-12 h-12 m-2"></FaUniversity>
				<h1 className="text-3xl font-bold">Education:</h1>
			</div>
		</div>
	);
}

export default Education;
