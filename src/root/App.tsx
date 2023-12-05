import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes-constants';
import HomePage from '../pages/HomePage';
import ReviewPage from '../pages/ReviewPage';
import LoginPage from '../pages/LoginPage';

import NavBar from '../components/UI/NavBar';
import { ThemeProvider } from '@emotion/react';
import customTheme from '../context/theme';

import './App.scss';

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={customTheme}>
				<NavBar />
				<Routes>
					<Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
					<Route path={ROUTES.REVIEWPAGE} element={<ReviewPage />} />{' '}
					<Route path={ROUTES.LOGINPAGE} element={<LoginPage />} />{' '}
				</Routes>
			</ThemeProvider>
		</Router>
	);
};

export default App;
