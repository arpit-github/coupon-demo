
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from '../../history';
import ErrorBoundary from '../common/error-boundary';

import AppLayout from './app-layout';

function App() {

	return (
		<Router history={history}>
			<ErrorBoundary>
				<Switch>
					<Route path='/' component={AppLayout} />
				</Switch>
			</ErrorBoundary>
		</Router>
	);
}

export default App;
