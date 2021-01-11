import React from 'react';

function NameInput({ value, handleInput }) {
	return (
		<div className="col-start-3 col-end-9 row-start-1 row-span-1 py-2">
			<input
				className="w-full text-2xl p-2 rounded border bg-gray-100  block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
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
