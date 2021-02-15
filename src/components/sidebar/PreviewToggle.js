import React, { useContext } from 'react';
import '../App.css';
import { PreviewModeContext } from './helpers/PreviewModeContext';

function PreviewToggle() {
	const {previewMode, setPreviewMode} = useContext(PreviewModeContext);

	return (
		<div className="toggle w-full block align-middle justify-center">
			<div className="toggle-wrapper">
				<div className="toggle normal">
					<input id="normal" type="checkbox" onClick={() => setPreviewMode(!previewMode)} />
					<label className="toggle-item" htmlFor="normal" />
				</div>
			</div>
		</div>
	);
}

export default PreviewToggle;
