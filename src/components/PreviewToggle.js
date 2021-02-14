import React from 'react';
import '../App.css';

function PreviewToggle() {
	return (
		<div className="toggle w-full block align-middle justify-center">
			<div className="toggle-wrapper">
				<div className="toggle normal">
					<input id="normal" type="checkbox" />
					<label className="toggle-item" htmlFor="normal" />
				</div>
			</div>
		</div>
	);
}

export default PreviewToggle;
