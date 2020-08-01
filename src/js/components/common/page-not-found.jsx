
import React from 'react';

import image from '../../../img/404.jpg';

import ErrorImage from './error-image';

function PageNotFound() {

	return (
		<ErrorImage image={image} />
	);
}

export default PageNotFound;
