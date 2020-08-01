import { http } from './http';

export const api = {

	login(data) {
		return http.post('login', data);
	}
};
