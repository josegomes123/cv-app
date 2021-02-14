import './App.css';
import CV from './components/CV';
import Footer from './components/Footer';
import Header from './components/Header';
import React, {useEffect } from 'react';


import { Font } from '@react-pdf/renderer';
import font from './assets/font.ttf';
import fontBold from './assets/fontBold.ttf';
import Sidebar from './components/Sidebar';

function App() {
	const registerFont = () => {
		// Register font
		Font.register({
			family: 'SourceSansPro',
			format: 'truetype',
			fonts: [
				{
					src: font,
				}, // font-style: normal, font-weight: normal
				{
					src: fontBold,
					fontWeight: 600,
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
			<div className="flex flex-column"><CV className="flex-grow"></CV><Sidebar></Sidebar></div>
			<Footer></Footer>
		</div>
	);
}

export default App;
