import React from 'react';
import { MdSend, MdFileDownload } from 'react-icons/md';
import generatePDFDocument from './GeneratePDF';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

function Sidebar() {
	return (
		<div className="flex-initial w-80 bg-gray-200 border-gray-300 border-l-2">
                        <p className="mt-5 mx-3 px-2 py-1 mb-12 text-3xl font-semibold text-center bg-gray-100 border-2 border-gray-300 border-r-2 rounded-md">Preview Mode</p>

			{/* {!this.state.submitStatus && ( */}
				<button
					className="col-start-1  col-end-11 place-self-center mb-4 font-medium transform border border-blue-200 bg-blue-200 text-blue-700 shadow rounded-md px-5 py-2 m-2 transition duration-150 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline active:scale-95"
					type="submit"
				>
					<MdSend className="text-2xl mr-2 inline align-top"></MdSend>
					Submit
				</button>
			{/* )} */}
			{/* {this.state.previewMode && this.state.submitStatus && ( */}
				<button
					// onClick={() => generatePDFDocument(this.state)}
					className="col-start-1 col-end-11 place-self-center mb-4 font-medium transform border border-blue-200 bg-blue-200 text-blue-700 shadow rounded-md px-5 py-2 m-2 transition duration-150 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline active:scale-95"
				>
					<MdFileDownload className="text-2xl mr-2 inline align-top"></MdFileDownload>
					Download
				</button>
			{/* )} */}

			<button
				className="col-start-1 col-end-11 place-self-center mb-4 font-medium transform border border-blue-200 bg-blue-200 text-blue-700 shadow rounded-md px-5 py-2 m-2 transition duration-150 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline active:scale-95"
				// onClick={() => this.testFullCV()}
			>
				<MdSend className="text-2xl mr-2 inline align-top"></MdSend>Test CV
			</button>
            <p className=" mx-3 px-2 py-1 mb-12 text-lg bg-red-100 border-2 border-gray-300 border-r-2 rounded-md">Fields left blank will be ommited in the preview mode and final PDF</p>
		</div>
	);
}

export default Sidebar;
