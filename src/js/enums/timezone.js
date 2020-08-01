
import { createEnum } from '../utils/enum-util';

export const Timezone = createEnum({
	UTC: {
		name: 'UTC',
		offset: 0
	},
	EST: {
		name: 'Eastern (EST/EDT)',
		offset: -4
	},
	CST: {
		name: 'Central (CST/CDT)',
		offset: -5
	},
	MST: {
		name: 'Mountain (MST/MDT)',
		offset: -6
	},
	PST: {
		name: 'Pacific (PST/PDT)',
		offset: -7
	},
	CUSTOM: {
		name: 'Custom',
		offset: 0
	}
});
