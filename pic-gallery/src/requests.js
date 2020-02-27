const APIURL = 'https://picsum.photos/200/300?grayscale';
const axios = require('axios');
const querystring = require('querystring');
export const getPhotos = (page = 1) => axios.get(`${APIURL}/`);
// export const searchPhotos = (data) => {
// 	return axios.get(`${APIURL}/?${querystring.encode(data)}`);
// };
