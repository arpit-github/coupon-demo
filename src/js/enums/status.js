
import { createEnum } from '../utils/enum-util';

export const Status = createEnum({
	ACTIVE: {
		name: 'Active'
	},
	BANNED: {
		name: 'Banned'
	}
});
