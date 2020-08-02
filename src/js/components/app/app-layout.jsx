
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { AppContext } from '../../global/context';
import PageNotFound from '../common/page-not-found';

import AppContent from './app-content';
import style from './app-layout.scss';
import HomePage from './home/home-page';

function AppLayout({ }) {
	const [contentHeight, setContentHeight] = useState(document.documentElement.clientHeight);
	const [contentWidth, setContentWidth] = useState(document.documentElement.clientWidth);

	useEffect(() => {
		const callback = () => {
			setContentHeight(document.documentElement.clientHeight);
			setContentWidth(document.documentElement.clientWidth);
		};
		window.addEventListener('resize', callback);
		return () => window.removeEventListener('resize', callback);
	}, []);

	return (
		<AppContext.Provider value={{ contentHeight, contentWidth }}>
			<div className={style['layout-container']}>
				<AppContent className={style['layout-content']}>
					<Switch>
						<Redirect exact from='/' to='/home' />

						<Route path='/home' exact component={HomePage} />

						<Route component={PageNotFound} />
					</Switch>
				</AppContent>
			</div>
		</AppContext.Provider>
	);
}

export default AppLayout;
