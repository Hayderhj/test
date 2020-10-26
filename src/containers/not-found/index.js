// @vendors
import React from 'react';

// @components
import Hero from '../hero';
import Navigation from '../navigation';


const Home = () => (
  <div>
		<Navigation />
		<main>
			<Hero nobg />
		</main>
		<footer>
		</footer>
  </div>
);

export default Home;
