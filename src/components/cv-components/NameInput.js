import React from 'react';

function NameInput({ value, handleInput }) {
	return (
		<div className="m-3 col-span-1">
			<input
				className="w-1/2  inline-block text-2xl p-2 rounded border bg-gray-100  block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
				type="text"
				placeholder="Input your name here"
				value={value}
				onChange={handleInput}
				name="name"
				required
			></input>
		</div>
	);
}

export default NameInput;
