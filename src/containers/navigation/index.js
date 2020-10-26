// @vendors
import React from 'react';

// @styles
import './style.scss';

// @assets
import glass from './../../assets/images/glass.png';

const Navigation  = () => (
<header className="navigation">
	<div className="wrapper navigation__content">
		<a className="navigation__title" href="/">Rule of Thumb.</a>
		<nav className="navigation__nav">
			<a className="navigation__nav-item" href="/pasttrials">Past Trials</a>
			<a className="navigation__nav-item" href="/howitworks">How It Works</a>
			<a className="navigation__nav-item" href="/login">Log In/Sign Up</a>
			<img src={glass} alt="glass" /> 
		</nav>
	</div>
</header>

);

export default Navigation;
