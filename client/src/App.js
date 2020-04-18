import React, { useState } from 'react';
import HomeContent from './components/home/HomeContent'
import Project from './components/project/Project'
import Navbar from './components/navbar/Navbar'
import { CSSTransition } from 'react-transition-group'
import './App.scss';

const App = () => {
	const [showHome, setShowHome] = useState(true)
	const [showProject1, setShowProject1] = useState(false)

	// Gets value of clicked link and sets state
	const setLinkActive = (link) => {
		if (link === 'project1') {
			setShowProject1(true)
		}

	}

	return (
		<div className="App">
			<Navbar
				linkClicked={setLinkActive}
			/>
			<section id="content-container">
				{showHome &&
					< HomeContent />
				}
				{showProject1 &&
					< Project />
				}

			</section>
		</div>
	);
}

export default App;
