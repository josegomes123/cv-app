import { IoIosMail } from 'react-icons/io';
import { GoMarkGithub } from 'react-icons/go';


const cleanURL = (url) => {
	let regex = /^(?:https?:\/\/)?(?:www\.)?/i;
	return url.replace(regex, '');
};




export { cleanURL };
