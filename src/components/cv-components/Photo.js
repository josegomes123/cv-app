import React, { useState } from 'react';
import photoPlaceholder from '../../assets/photo-placeholder.png';

function Photo({ previewMode }) {
	let photo;
	// const [picture, setPicture] = useState(null);
	const [imgData, setImgData] = useState(null);
	const [photoUploaded, setPhotoUploaded] = useState(false);

	// Upload CV photo
	const onChangePicture = (e) => {
		if (e.target.files[0]) {
			// setPicture(e.target.files[0]);
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				setImgData(reader.result);
				setPhotoUploaded(true);
			});
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	// Render photo uploaded or placeholder img
	if (!photoUploaded) {
		photo = (
			<div>
				<label htmlFor="profilePic">
					<img
						className="w-40 cursor-pointer shadow-lg rounded align-middle border-none"
						src={photoPlaceholder}
						alt=""
					/>
				</label>
				<input
					className="hidden"
					id="profilePic"
					type="file"
					onChange={onChangePicture}
				/>
			</div>
		);
	} else {
		photo = (
			<img
				className="w-40 h-40 object-contain shadow-lg rounded align-middle border-none"
				src={imgData}
				alt=""
			/>
		);
	}

	if (!previewMode) {
		return (
			<div className="flex-shrink-0 place-self-center align-middle col-start-1 row-start-1 col-span-2 row-span-2">
				{photo}
			</div>
		);
	} else {
		if (photoUploaded) {
			return (
				<div className="flex-shrink-0 place-self-center align-middle col-start-1 row-start-1 col-span-2 row-span-2">
					{photo}
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Photo;
