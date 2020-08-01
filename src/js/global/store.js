let configObj = null;

const Store = {
	// config response
	get config() {
		if (configObj) {
			return configObj;
		} else {
			throw Error('Config Response not found');
		}
	},
	set config(obj) {
		if (configObj) {
			throw Error('Config Response is not empty to set');
		} else {
			configObj = Object.freeze(obj);
		}
	},
	isConfig() {
		return !!configObj;
	}

};

export default Store;
