import React from 'react';

import image from '../../../img/error.png';

import ErrorImage from './error-image';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		// eslint-disable-next-line no-console
		console.log(error);
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		// eslint-disable-next-line no-console
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<ErrorImage image={image} />
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
