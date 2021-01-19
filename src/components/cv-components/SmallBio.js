import React from 'react';

function SmallBio({ value, handleInput, previewMode }) {
	if (!previewMode) {
		return (
			<div className="col-start-3 col-end-9 row-start-2 row-span-2 self-start">
				<textarea
					className="w-full bg-gray-100 p-2 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-300"
					type="text"
					placeholder="Small bio about yourself here"
					value={value}
					onChange={handleInput}
					rows="4"
					name="bio"
				></textarea>
			</div>
		);
	} else {
		return (
			<div className="col-start-3 col-end-9 row-start-2 row-span-2 self-start">
				<p className="w-full bg-white p-2 rounded block  focus:outline-none">{value}</p>
			</div>
		);
	}
}

export default SmallBio;
