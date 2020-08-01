
import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

import style from './spinner.scss';

function Spinner({ show }) {

	if (!show) {
		return null;
	}

	return (
		<div className={ style.container }>
			<Spin size='large' />
		</div>
	);
}

Spinner.propTypes = {
	show: PropTypes.bool
};

Spinner.defaultProps = {
	show: true
};

export default Spinner;
