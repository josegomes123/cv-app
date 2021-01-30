import React from 'react';
import {
	Page,
	Image,
	Text,
	View,
	Document,
	StyleSheet,
} from '@react-pdf/renderer';

export default function PDFDocument() {
	// Create styles
	const styles = StyleSheet.create({
		page: {
			flexDirection: 'row',
			backgroundColor: '#E4E4E4',
			paddingTop: 35,
			paddingBottom: 65,
			paddingHorizontal: 35,
		},
		section: {
			margin: 10,
			padding: 10,
			flexGrow: 1,
		},
		photo: {
			heigth: 100,
			width: 100,
			objectFit: 'contain',
			order: 1,
			position: 'absolute',
			top: 35,
			left: 35,
		},
		name: {
			fontWeight: 500,
			fontSize: 20,
			maxLine: 6,
		},
	});

	const cv = JSON.parse(localStorage.getItem('cv'));
	const photo = localStorage
		.getItem('Photo')
		.replace(/^data:image\/(png|jpg);base64,/, '');

	return (
		<Document>
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
					<View style={styles.section}>
						<Text style={styles.name}>{cv.name}</Text>
						<Text style={styles.description}>{cv.bio}</Text>
					</View>
				</View>
				<View style={styles.section}>
					<Text>Section #2</Text>
				</View>
			</Page>
		</Document>
	);
}
