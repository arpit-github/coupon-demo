
import { createEnum } from '../utils/enum-util';

export const FilterOperator = {

	Date: createEnum({
		BEFORE: {
			key: 'before',
			name: 'Before'
		},
		AFTER: {
			key: 'after',
			name: 'After'
		}
	}),

	Number: createEnum({
		LESS_THAN: {
			key: 'lt',
			name: 'Less Than'
		},
		GREATER_THAN: {
			key: 'gt',
			name: 'Greater Than'
		},
		EQUALS: {
			key: 'eq',
			name: 'Equals'
		}
	}),

	String: createEnum({
		CONTAINS: {
			key: 'contains',
			name: 'Contains'
		},
		STARTS_WITH: {
			key: 'startswith',
			name: 'Starts With'
		}
	})
};
