import React, { useContext } from 'react';
import { MdSend, MdFileDownload } from 'react-icons/md';
import { CgTemplate } from 'react-icons/cg';
import PreviewToggle from './PreviewToggle';
import SidebarHeader from './SidebarHeader';
import { PreviewModeContext } from '../helpers/PreviewModeContext';
import cvTemplateTest from '../helpers/cvTemplateTest';
import generatePDFDocument from '../helpers/GeneratePDF';

function Sidebar(props) {
	const { previewMode, setPreviewMode } = useContext(PreviewModeContext);

	return (
		<div className="flex-shrink-0 overflow-y-hidden h-screen w-80 bg-gray-200 border-gray-300 border-l-2">
			<SidebarHeader title="Preview Mode"></SidebarHeader>

			<PreviewToggle></PreviewToggle>
			{!previewMode && (<p className=" mx-3 px-2 py-1 mb-4 text-lg bg-red-100 border-2 border-gray-300 border-r-2 rounded-md">
				You must enable Preview Mode to be able to download the PDF!
			</p>)}
			<SidebarHeader title="Options"></SidebarHeader>
			<div className="text-center">
				{/* {!previewMode && (
					<button
						className="block m-auto place-self-center mb-4 font-medium transform border border-blue-200 bg-blue-200 text-blue-700 shadow rounded-md px-5 py-2 m-2 transition duration-150 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline active:scale-95"
						type="submit"
						onClick={props.handleSubmit(undefined)}
					>
						<MdSend className="text-2xl mr-2 inline align-top"></MdSend>
						Submit
					</button>
				)} */}
				{previewMode && (
					<button
						onClick={() => generatePDFDocument(props.cvData)}
						className="block m-auto place-self-center mb-4 font-medium transform border border-blue-200 bg-blue-200 text-blue-700 shadow rounded-md px-5 py-2 m-2 transition duration-150 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline active:scale-95"
					>
						<MdFileDownload className="text-2xl mr-2 inline align-top"></MdFileDownload>
						Download PDF
					</button>
				)}

				<button
					className="block m-auto	 mb-4 font-medium transform border border-blue-200 bg-blue-200 text-blue-700 shadow rounded-md px-5 py-2 m-2 transition duration-150 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline active:scale-95"
					onClick={() => props.handler(cvTemplateTest())}
				>
					<CgTemplate className="text-2xl mr-2 inline align-top"></CgTemplate>
					Template CV
				</button>
			</div>
			<SidebarHeader title="Instructions"></SidebarHeader>

			<p className=" mx-3 px-2 py-1 mb-4 text-m bg-gray-100 border-2 border-gray-300 border-r-2 rounded-md">
				Fill the inputs you deem necessary, no input is obligatory, however some
				do require specific formats:
				<li>Phone requires a number format</li>
				<li>Email requires a valid email format</li>
				<li>
					Github and Linkedin require a valid URL format (just for linking
					purposes, these URL's are parsed before the final render)
				</li>
			</p>
			<p className=" mx-3 px-2 py-1 mb-12 text-lg bg-red-100 border-2 border-gray-300 border-r-2 rounded-md">
				Fields left blank will be ommited in the preview mode and exported PDF
			</p>
		</div>
	);
}

export default Sidebar;
