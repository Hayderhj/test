// @vendors
import React from 'react';

// @components
import Hero from '../hero';
import Message from '../../components/message';
import Navigation from '../navigation';
import Rulings from '../rulings';

// @styles
import './style.scss';

// @assets
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';

const Home = () => (
  <div>
		<Navigation />
		<main>
			<Hero />
			<Message
				className="wrapper"
				title="Speak out. Be heard."
				titleHighLight="Be Counted"
				content="Rule of Thumb is a crown suourced court of public opinion where anyone and everyone can speak out and speak freely. its easy you share your opinion, we analyze and put the data in public report."
			/>
			<Rulings />
			<footer className="wrapper footer">
				<div className="footer__legal">
					<a href="/terms">Terms and Conditions</a>
					<a href="/privacy">Privacy Policy</a>
					<a href="/contact">Contact Us</a>
				</div>
				<div className="footer__socials">
					Follow Us
					<a href="/facebook.com"><img src={facebook} alt="facebook"></img></a>
					<a href="/twitter.com"><img src={twitter} alt="twitter"></img></a>
				</div>
			</footer>
		</main>
		<footer>
		</footer>
  </div>
);

export default Home;
