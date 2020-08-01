
import { createEnum } from '../utils/enum-util';

export const Continent = createEnum({
	AFRICA: {
		name: 'Africa',
		code: 'AF'
	},
	ANTARCTICA: {
		name: 'Antarctica',
		code: 'AN'
	},
	ASIA: {
		name: 'Asia',
		code: 'AS'
	},
	EUROPE: {
		name: 'Europe',
		code: 'EU'
	},
	NORTH_AMERICA: {
		name: 'North America',
		code: 'NA'
	},
	OCEANIA: {
		name: 'Oceania',
		code: 'OC'
	},
	SOUTH_AMERICA: {
		name: 'South America',
		code: 'SA'
	}
});
