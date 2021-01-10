import React from 'react';
import { ImLocation } from 'react-icons/im';

function Location({ value, handleInput }) {
	return (
		<div className="flex flex-column items-right m-1">
			<ImLocation className="text-xl m-2" />
			<input
				className="pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
				type="text"
				placeholder="Your location here"
				value={value}
				onChange={handleInput}
				name="location"
			></input>
		</div>
	);
}

export default Location;
