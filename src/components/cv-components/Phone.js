import React from 'react';
import { AiFillPhone } from 'react-icons/ai';

function Phone({ value, handleInput }) {
	return (
		<div className="flex flex-column items-right m-1">
			<AiFillPhone className="flex-shrink-0 text-xl m-2" />
			<input
				className="pl-2 inline-block rounded border border-gray-200 block placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
				type="tel"
				pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
				placeholder="Your phone here"
				value={value}
				onChange={handleInput}
				name="phone"
			></input>
		</div>
	);
}

export default Phone;
