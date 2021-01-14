import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';

function LinkedIn({ value, handleInput }) {
	return (
		<div className="flex flex-column items-right m-1">
			<AiFillLinkedin className="flex-shrink-0 text-xl m-2" />
			<input
				className="pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
				type="url"
				name="linkedin"
				placeholder="Your LinkedIn here"
				value={value}
				onChange={handleInput}
			></input>
		</div>
	);
}

export default LinkedIn;
