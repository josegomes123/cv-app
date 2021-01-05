import React from 'react';

export default function Header() {
	return (
		<div className="shadow-lg border-b-4  border-blue-700	 select-none flex flex-row items-center bg-blue-500 content-center align-middle">
			<svg
				className="stroke-current stroke-1 transition-all duration-300 w-14 p-2 flex-initial text-gray-100 sm:w-14 lg:w-20"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
				/>
			</svg>
			<h1 className="font-sans font-semibold subpixel-antialiased transition-all duration-300 flex-initial text-gray-100 text-lg sm:text-2xl lg:text-3xl">Make Your CV!</h1>
			<h3 className="transition-all duration-300  flex-initial pl-8 text-gray-100 text-xs sm:text-lg lg:text-xl">Export automatically to PDF!</h3>
		</div>
	);
}
