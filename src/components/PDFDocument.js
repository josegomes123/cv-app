import React from 'react';
import {
	Page,
	Image,
	Text,
	View,
	Document,
	StyleSheet,
	Link,
} from '@react-pdf/renderer';
import locationIMG from '../assets/location.png';
import emailIMG from '../assets/email.png';
import githubIMG1 from '../assets/github.jpg';
import linkedinIMG from '../assets/linkedin.png';
import phoneIMG from '../assets/phone.png';
import schoolIMG from '../assets/school.png';
import workIMG from '../assets/work.png';
import skillsIMG from '../assets/skills.png';

function PDFDocument({ cv }) {
	const generateEducationBlockPDF = () => {
		return cv.education.map((edBlock, index) => (
			<View key={index} style={styles.edBlock}>
				<View
					style={{ display: 'flex', flexDirection: 'row', marginBottom: 5 }}
				>
					<Text style={styles.blockText}>{edBlock.school}</Text>
					<Text style={styles.blockTextBold}>{edBlock.degree}</Text>
				</View>
				<View
					style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}
				>
					<Text style={styles.blockTextDate}>{edBlock.startDate}</Text>
					<Text style={styles.blockTextDate}>{edBlock.endDate}</Text>
				</View>
			</View>
		));
	};

	const generateExperienceBlockPDF = () => {
		return cv.experience.map((expBlock, index) => (
			<View key={index} style={styles.edBlock}>
				<View
					style={{ display: 'flex', flexDirection: 'row', marginBottom: 5 }}
				>
					<Text style={styles.blockText}>{expBlock.company}</Text>
					<Text style={styles.blockTextBold}>{expBlock.position}</Text>
				</View>
				<View
					style={{ display: 'flex', flexDirection: 'row', marginBottom: 5 }}
				>
					<Text style={styles.blockTextDate}>{expBlock.startDate}</Text>
					<Text style={styles.blockTextDate}>{expBlock.endDate}</Text>
				</View>
				<Text style={{ fontSize: 9, fontWeight: 400, marginBottom: 10 }}>
					{expBlock.jobDescription}
				</Text>
			</View>
		));
	};

	const generateSkillsBlockPDF = () => {
		return cv.skills.map((skillBlock, index) => (
			<Text key={index} style={styles.blockTextSkills}>
				{'\u2022'} {skillBlock.skillName}
			</Text>
		));
	};

	const renderPhoto = () => {
		const photo = localStorage.getItem('Photo');
		if (photo !== '' && photo !== null) {
			return (
				<Image
					src={photo}
					allowDangerousPaths="true"
					style={styles.photo}
				></Image>
			);
		} else {
			return null;
		}
	};

	// Create styles
	const styles = StyleSheet.create({
		page: {
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: '#ffffff',
			paddingTop: 35,
			paddingBottom: 65,
			paddingHorizontal: 20,
			fontFamily: 'SourceSansPro',
		},
		infobox: {
			display: 'flex',
			flexDirection: 'row',
		},
		photo: {
			heigth: 100,
			width: 100,
			objectFit: 'contain',
			order: '-1',
		},
		info: {
			fontSize: 9,
			padding: 4,
			marginRight: 10,
			color: '#000000',
			textDecoration: 'none',
		},
		header: {
			marginLeft: 20,
			marginRight: 20,
			textAlign: 'justify',
			placeSelf: 'flex-start',
			flexGrow: 3,
			maxWidth: '55%',
		},
		name: {
			fontWeight: 600,
			fontSize: 22,
			paddingBottom: 5,
		},
		description: {
			fontSize: 10,
			fontWeight: 400,
			maxLines: 6,
		},
		headingText: {
			fontSize: 20,
			fontWeight: 600,
			marginLeft: 10,
			display: 'inline',
		},
		icons: {
			objectFit: 'contain',
			heigth: 12,
			width: 12,
		},
		bigIcons: {
			objectFit: 'contain',
			display: 'inline',
			heigth: 35,
			width: 35,
			marginLeft: 10,
		},
		workIcon: {
			objectFit: 'contain',
			display: 'inline',
			heigth: 30,
			width: 30,
			marginLeft: 10,
		},
		blockTextBold: {
			fontSize: 11,
			fontWeight: 700,
			marginLeft: 30,
		},
		blockText: {
			fontSize: 11,
			fontWeight: 400,
		},
		blockTextDate: {
			fontSize: 8,
			fontWeight: 400,
			marginLeft: 10,
		},
		blockTextSkills: {
			fontSize: 10,
			fontWeight: 400,
			marginLeft: 10,
			marginTop: 10,
		},
	});
	return (
		<Document
			id="b"
			style={{
				fontFamily: 'SourceSansPro',
			}}
		>
			<Page size="A4" style={styles.page}>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						height: '120',
						marginBottom: 20,
						justifyContent: 'space-between',
					}}
				>
					{renderPhoto()}
					<View style={styles.header}>
						<Text style={styles.name}>{cv.name}</Text>
						<Text style={styles.description}>{cv.bio}</Text>
					</View>
					<View
						style={{
							alignContent: 'center',
							placeSelf: 'flex-end',
							marginLeft: 'auto',
							flexBasis: '200px',
						}}
					>
						{cv.location !== '' && (
							<View style={styles.infobox}>
								<Image
									src={locationIMG}
									allowDangerousPaths="true"
									style={styles.icons}
								></Image>
								<Text style={styles.info}>{cv.location}</Text>
							</View>
						)}
						{cv.phone !== '' && (
							<View style={styles.infobox}>
								<Image
									src={phoneIMG}
									allowDangerousPaths="true"
									style={styles.icons}
								></Image>
								<Text style={styles.info}>{cv.phone}</Text>
							</View>
						)}
						{cv.email !== '' && (
							<View style={styles.infobox}>
								<Image
									src={emailIMG}
									allowDangerousPaths="true"
									style={styles.icons}
								></Image>
								<Link src={`mailto:${cv.email}`} style={styles.info}>
									{cv.email}
								</Link>
							</View>
						)}
						{cv.linkedin !== '' && (
							<View style={styles.infobox}>
								<Image
									src={linkedinIMG}
									allowDangerousPaths="true"
									style={styles.icons}
								></Image>
								<Link src={cv.linkedin} style={styles.info}>
									{cv.linkedin}
								</Link>
							</View>
						)}
						{cv.github !== '' && (
							<View style={styles.infobox}>
								<Image
									src={githubIMG1}
									allowDangerousPaths="true"
									style={styles.icons}
								></Image>
								<Link src={cv.github} style={styles.info}>
									{cv.github}
								</Link>
							</View>
						)}
					</View>
				</View>
				{cv.education.length !== 0 && (
					<View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								paddingBottom: 5,
								borderBottom: 1,
							}}
						>
							<Image
								src={schoolIMG}
								allowDangerousPaths="true"
								style={styles.bigIcons}
							></Image>
							<Text style={styles.headingText}>Education</Text>
						</View>
						<View
							style={{
								marginTop: 10,
							}}
						>
							{generateEducationBlockPDF()}
						</View>
					</View>
				)}
				{cv.experience.length !== 0 && (
					<View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								paddingBottom: 5,
								borderBottom: 1,
							}}
						>
							<Image
								src={workIMG}
								allowDangerousPaths="true"
								style={styles.workIcon}
							></Image>
							<Text style={styles.headingText}>Experience</Text>
						</View>
						<View
							style={{
								marginTop: 10,
							}}
						>
							{generateExperienceBlockPDF()}
						</View>
					</View>
				)}
				{cv.skills.length !== 0 && (
					<View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								paddingBottom: 5,
								borderBottom: 1,
							}}
						>
							<Image
								src={skillsIMG}
								allowDangerousPaths="true"
								style={styles.bigIcons}
							></Image>
							<Text style={styles.headingText}>Skills</Text>
						</View>
						<View
							style={{
								marginTop: 10,
								display: 'flex',
								flexDirection: 'column',
								maxHeight: '150px',
								flexWrap: 'wrap',
								alignContent: 'flex-start',
							}}
						>
							{generateSkillsBlockPDF()}
						</View>
					</View>
				)}
			</Page>
		</Document>
	);
}

export default PDFDocument;
