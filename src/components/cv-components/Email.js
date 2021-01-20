import React from 'react';
import { IoIosMail } from 'react-icons/io';

function Email({ value, handleInput, previewMode }) {
	if (!previewMode) {
		return (
			<div className="flex flex-row items-right m-1">
				<IoIosMail className="flex-shrink-0 text-xl m-2" />
				<input
					className="pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:outline-none focus:ring focus:border-blue-300"
					type="email"
					name="email"
					placeholder="Your email here"
					value={value}
					onChange={handleInput}
				></input>
			</div>
		);
	} else {
		if (value !== '') {
			return (
				<div className="flex flex-column items-center m-1">
					<IoIosMail className="flex-shrink-0 text-2xl m-2" />
					<div className="pl-2 mb-1 text-lg bg-white font-medium">
						<a href={'mailto:' + value}>{value}</a>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Email;
