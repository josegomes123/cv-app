import React from 'react';

function SmallBio({ value, handleInput }) {
	return (
		<div className="m-3">
			<textarea
				className="w-1/2  bg-gray-100 inline-block text-xs p-2 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
				type="text"
				placeholder="Small bio about yourself here"
				value={value}
				onChange={handleInput}
				rows="3"
				name="bio"
			></textarea>
		</div>
	);
}

export default SmallBio;
