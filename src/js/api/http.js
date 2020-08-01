import axios from 'axios';

import Store from '../global/store';

const dev = process.env.NODE_ENV !== 'production';

const paramsSerializer = params =>
	Object.entries(params).map(([key, value]) =>
		key + '=' + (value || '')).join('&') || '';

export const http = axios.create({
	paramsSerializer
});

http.interceptors.request.use(config => {
	let securityHeaders = {};
	const timeStamp = Date.now().toString();
	const userHeaders = {
		'Content-Type': 'application/json',
		'platform': 'WEB',
		'ts': timeStamp
	};
	if (Store.isConfig()) {
		config.url = '/' + config.url;
	} else {
		config.url = '/' + config.url;
		userHeaders['web-token'] = '4G8f9PzYrLDNpk63';
	}
	config.url = '/api' + config.url;
	config.headers = {
		...config.headers,
		...userHeaders,
		...securityHeaders
	};
	return config;
}, error => Promise.reject(error));

http.interceptors.response.use(response => {
	if (response.data && !response.data.s) {
		// if (authService.isAuthenticated()) {
		// 	authService.logout();
		// }
		// if (!dev) {
		// 	window.location.reload();
		// }
	} 
	// else if ((response.data && response.data.s && response.data.loggedOut) || response.data.status === 401) {
	// 	window.location.reload();
	// }
	return response;
});
