import React from 'react';
import {
	Page,
	Image,
	Text,
	View,
	Document,
	StyleSheet,
	Canvas,
	Circle,
	Line,
	Svg,
} from '@react-pdf/renderer';
import { AiFillLinkedin } from 'react-icons/ai';
import ReactDOM from 'react-dom'


export default function PDFDocument() {
	// Create styles


	const styles = StyleSheet.create({
		page: {
			flexDirection: 'row',
			backgroundColor: '#E4E4E4',
			paddingTop: 35,
			paddingBottom: 65,
			paddingHorizontal: 20,
		},
		section: {
			margin: 10,
			padding: 10,
			flexGrow: 1,
		},
		photo: {
			heigth: 90,
			width: 90,
			objectFit: 'contain',
			order: 1,
			position: 'absolute',
			top: 15,
			left: 20,
		},
		name: {
			fontWeight: 500,
			fontSize: 25,
		},
		description: {
			fontSize: 14,
			maxLines: 6,
		},
	});

	let jsx = ReactDOM.render(<AiFillLinkedin style={{display:"none"}}></AiFillLinkedin>, document.querySelector("body"));
	console.log(jsx);

	const cv = JSON.parse(localStorage.getItem('cv'));

	const photo = localStorage
		.getItem('Photo')
		.replace(/^data:image\/(png|jpg);base64,/, '');

	return (
		<Document id="b">
			<Page size="A4" style={styles.page}>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<Image
						debug="true"
						src={photo}
						allowDangerousPaths="true"
						style={styles.photo}
					></Image>
					<View
						style={{
							marginLeft: 120,
							textAlign: 'justify',
						}}
					>
						<Text style={styles.name}>{cv.name}</Text>
						<Text style={styles.description}>{cv.bio}</Text>
					</View>
					<Image
						debug="true"
						src={<AiFillLinkedin></AiFillLinkedin>}
						allowDangerousPaths="true"
						style={styles.photo}
					></Image>
				</View>
				<View style={styles.section}>
					<Text>Section #2</Text>
				</View>
			</Page>
		</Document>
	);
}
