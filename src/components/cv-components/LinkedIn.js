import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import {cleanURL} from "./PreviewGenerator"


function LinkedIn({ value, handleInput, previewMode }) {
	if (!previewMode) {
		return (
			<div className="flex flex-column items-right m-1">
				<AiFillLinkedin className="flex-shrink-0 text-xl m-2" />
				<input
					className="pl-2 rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-300"
					type="url"
					name="linkedin"
					placeholder="Your LinkedIn here"
					value={value}
					onChange={handleInput}
				></input>
			</div>
		);
	} else {
		if (value !== '') {
			return (
				<div className="flex flex-column items-center m-1">
					<AiFillLinkedin className="flex-shrink-0 text-2xl m-2" />
					<div className="pl-2 mb-1 text-lg bg-white font-medium">
						<a href={value}>{cleanURL(value)}</a>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default LinkedIn;
