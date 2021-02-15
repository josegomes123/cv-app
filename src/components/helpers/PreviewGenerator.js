const cleanURL = (url) => {
	let regex = /^(?:https?:\/\/)?(?:www\.)?/i;
	return url.replace(regex, '');
};

export { cleanURL };
