
import React from 'react';
import PropTypes from 'prop-types';

import style from './app-content.scss';

function AppContent({ children }) {

	return (
		<section className={ style.content }>
			{ children }
		</section>
	);
}

AppContent.propTypes = {
	children: PropTypes.node
};

export default AppContent;
