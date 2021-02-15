import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import PDFDocument from '../PDFDocument';

const generatePDFDocument = async (cvData) => {
	const blob = await pdf(<PDFDocument cv={cvData} title="CV" />).toBlob();
	saveAs(blob, 'cv.pdf');
};

export default generatePDFDocument;
