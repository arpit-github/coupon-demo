
import { createEnum } from '../utils/enum-util';

export const UserRoles = createEnum({
	SUPER: {
		name: 'Super'
	},
	ADMIN: {
		name: 'Admin'
	}
});
