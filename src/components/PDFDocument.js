import React, { Component } from 'react';
import {
	Page,
	Image,
	Text,
	View,
	Document,
	StyleSheet,
	Link,
} from '@react-pdf/renderer';
import { AiFillLinkedin } from 'react-icons/ai';
import locationIMG from '../assets/location.png';
import emailIMG from '../assets/email.png';
import githubIMG from '../assets/github.png';
import linkedinIMG from '../assets/linkedin.png';
import phoneIMG from '../assets/phone.png';

export class PDFDocument extends Component {
	constructor(props) {
		super(props);

		this.state = {
			locsvg: '',
		};
	}

	converter = (idSVG) => {
		let converted = '';
		var svg = document.getElementById(idSVG);
		var svgData = new XMLSerializer().serializeToString(svg);
		var canvas = document.createElement('canvas');
		var svgSize = svg.getBoundingClientRect();
		canvas.width = svgSize.width;
		canvas.height = svgSize.height;
		var ctx = canvas.getContext('2d');
		var img = document.createElement('img');
		img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData));
		const promise = new Promise((resolve) => {
			img.onload = function () {
				ctx.drawImage(img, 0, 0);
				// Now is done
				resolve(canvas.toDataURL('image/png'));
			};
		});
		// At this point, "promise" is already settled.
		promise.then((result) => this.setState({ locsvg: result }));
	};

	render() {
		const cv = JSON.parse(localStorage.getItem('cv'));
		const photo = localStorage.getItem('Photo');
		const locsvg = localStorage.getItem('locsvg');

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
			},
			info: {
				fontSize: 9,
				padding: 4,
				marginRight: 5,
				color: '#000000',
				textDecoration: 'none',
			},
			header: {
				marginLeft: 110,
				marginRight: 30,
				textAlign: 'justify',
				width: 300,
			},
			name: {
				fontWeight: 600,
				fontSize: 22,
				paddingBottom: 5,
			},
			description: {
				fontSize: 12,
				maxLines: 6,
			},
			icons: {
				heigth: 12,
				width: 12,
			},
		});

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
							src={photo}
							allowDangerousPaths="true"
							style={styles.photo}
						></Image>
						<View style={styles.header}>
							<Text style={styles.name}>{cv.name}</Text>
							<Text style={styles.description}>{cv.bio}</Text>
						</View>
						<View>
							<View>
								<Image
									src={locationIMG}
									allowDangerousPaths="true"
									style={styles.icons}
								></Image>
								<Text style={styles.info}>{cv.location}</Text>
							</View>
							<View>
								<Image
									src={phoneIMG}
									allowDangerousPaths="true"
									style={styles.icons}
								></Image>
								<Text style={styles.info}>{cv.phone}</Text>
							</View>
							<View>
								<Image
									src={emailIMG}
									allowDangerousPaths="true"
									style={styles.icons}
								></Image>
								<Link src={`mailto:${cv.email}`} style={styles.info}>
									{cv.email}
								</Link>
							</View>
							<View>
								<Image
									src={linkedinIMG}
									allowDangerousPaths="true"
									style={styles.icons}
								></Image>
								<Link src={cv.linkedin} style={styles.info}>
									{cv.linkedin}
								</Link>
							</View>
							<View>
								<Image
									src={githubIMG}
										allowDangerousPaths="true"
									style={styles.icons}
								></Image>
								<Link src={cv.github} style={styles.info}>
									{cv.github}
								</Link>
							</View>
						</View>
					</View>
				</Page>
			</Document>
		);
	}
}

export default PDFDocument;
