import React from 'react';

function SmallBio({ value, handleInput }) {
	return (
		<div className="col-start-3 col-end-9 row-start-2 row-span-2 self-start">
			<textarea
				className="w-full bg-gray-100 text-sm p-2 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-300"
				type="text"
				placeholder="Small bio about yourself here"
				value={value}
				onChange={handleInput}
				rows="4"
				name="bio"
			></textarea>
		</div>
	);
}

export default SmallBio;
