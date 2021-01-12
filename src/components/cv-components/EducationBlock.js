import React from 'react';

function EducationBlock({ value, handleInput }) {
	function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }


	return (
		<div className="m-2 grid grid-cols-3 grid-rows-2">
			<input
				className="col-start-1 col-end-3 row-start-1 pl-2 m-1 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
				type="school"
				name="school"
				placeholder="Your school here"
				value={value}
				onChange={handleInput}
			></input>
			<input
				className="col-start-1 col-end-3 row-start-2 pl-2 m-1 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
				type="degree"
				name="degree"
				placeholder="Your degree here"
				value={value}
				onChange={handleInput}
			></input>
            <div>
			<label for="start">Start date:</label>
			<input className="col-start-4 row-span-2 pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
				type="date"
				id="start"
				name="education-start"
				value={formatDate(new Date())}
				min="2018-01-01"
				max="2018-12-31"
			></input></div>
            <div>
			<label for="end">End date:</label>
			<input className="pl-2 inline-block rounded border border-gray-200 block  placeholder-black focus:placeholder-gray-400 hover:border-blue-500 focus:border-blue-500 focus:border-black focus:outline-none focus:ring focus:border-blue-300"
				type="date"
				id="end"
				name="education-end"
				value={formatDate(new Date())}
				min="2018-01-01"
				max={formatDate(new Date())}
			></input></div>
		</div>
	);
}

export default EducationBlock;
