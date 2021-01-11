import React, { useState } from 'react';
import photoPlaceholder from '../../assets/photo-placeholder.png';

function Photo() {
	let photo;
	const [picture, setPicture] = useState(null);
	const [imgData, setImgData] = useState(null);
	const [photoUploaded, setPhotoUploaded] = useState(false);

	// upload photo
	const onChangePicture = (e) => {
		if (e.target.files[0]) {
			console.log('picture: ', e.target.files);
			setPicture(e.target.files[0]);
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				setImgData(reader.result);
				setPhotoUploaded(true);
				const photoUploaded = true;
			});
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	// Render photo uploaded or placeholder img
	if (!photoUploaded) {
		photo = (
			<div>
				<label htmlFor="profilePic">
					<img className="w-40" src={photoPlaceholder} />
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
		photo = <img className="w-40 h-40 object-contain" src={imgData} />;
	}

	return <div className="place-self-center col-start-1 row-start-1 col-span-2 row-span-2">{photo}</div>;
}

export default Photo;
