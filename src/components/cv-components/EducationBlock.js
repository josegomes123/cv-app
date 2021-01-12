import React from 'react';

function EducationBlock({ value, handleInput }) {
	return (
		<div className="grid">
			<input
				className="pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
				type="email"
				name="email"
				placeholder="Your email here"
				value={value}
				onChange={handleInput}
			></input>
		</div>
	);
}

export default EducationBlock;
