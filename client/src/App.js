import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'

import './App.scss';

const App = () => {

	return (
		<div className="App">
			<Router>
				<Navbar />
				<Container />
			</Router>
		</div>
	);
}

export default App;
