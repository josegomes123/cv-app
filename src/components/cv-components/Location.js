import React from 'react';
import { ImLocation } from 'react-icons/im';

function Location({ value, handleInput, previewMode }) {
	if (!previewMode) {
		return (
			<div className="flex flex-column items-right m-1">
				<ImLocation id="locsvg" className="flex-shrink-0 text-xl m-2" />
				<input
					className="pl-2 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-300"
					type="text"
					placeholder="Your location here"
					value={value}
					onChange={handleInput}
					name="location"
				></input>
			</div>
		);
	} else {
		if (value !== '') {
			return (
				<div className="flex flex-column items-right m-1">
					<ImLocation id="locsvg" className="flex-shrink-0 text-xl m-2" />
					<div className="pl-2 mb-1 text-lg bg-white font-medium">
						<p className="pl-2 ">{value}</p>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Location;
