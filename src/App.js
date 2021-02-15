import './App.css';
import CV from './components/CV';
import Footer from './components/Footer';
import Header from './components/Header';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Font } from '@react-pdf/renderer'
import fontLight from './assets/fonts/SourceSansPro-Light.otf';
import font from './assets/fonts/SourceSansPro-Regular.otf';
import fontSemiBold from './assets/fonts/SourceSansPro-Semibold.otf';
import fontBold from './assets/fonts/SourceSansPro-Bold.otf';
import fontBlack from './assets/fonts/SourceSansPro-Black.otf';
import Sidebar from './components/Sidebar';
import {PreviewModeContext} from './components/PreviewModeContext';

function App() {
	const [previewMode, setPreviewMode] = useState(false);
	const value = { previewMode, setPreviewMode };

	const registerFont = () => {
		// Register font
		Font.register({
			family: 'SourceSansPro',
			format: 'opentype',
			fonts: [
				{
					src: fontLight,
					fontWeight: 300,
				},
				{
					src: font,
				}, // font-style: normal, font-weight: normal
				{
					src: fontSemiBold,
					fontWeight: 600,
				},
				{
					src: fontBold,
					fontWeight: 700,
				},
				{
					src: fontBlack,
					fontWeight: 900,
				},
			],
		});
	};
	useEffect(() => {
		registerFont();
	}, []);

	return (
		<div>
			<Header></Header>
			<PreviewModeContext.Provider value={value}>
				<div className="flex flex-column">
					<CV></CV>
					<Sidebar></Sidebar>
				</div>
			</PreviewModeContext.Provider>
			<Footer></Footer>
		</div>
	);
}

export default App;
