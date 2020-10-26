// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './style.scss';

// @assets
import wiki from '../../assets/images/wiki.png';
import thumbs from '../../assets/images/thumbs.png';

const Hero  = ({ nobg }) => (
	<section className="hero">
		<div className="wrapper">
			<div className="hero__content">
				<div className="hero__ruling">
					<div className="hero__ruling-head">
						<div className="hero__ruling-bg"></div>
						<div className="hero__ruling-content">
							<span className="pre-title">What's your opinion on</span>
							<h1 className='title'> Pope Francis?</h1>
							<p className="hero__ruling-description">
								He's talking tough on clergy sexual abuse, but
								is he just another papal pervert protector?
								(thumbs down) or a true pedophile punishing
								pontiff? (thumbs up)
							</p>
							<div className="hero__ruling-more-info">
								<a href="/moreinfo">
									<img src={wiki} alt="wiki" /> More information
								</a>
							</div>
							<h2>What's Your Verdict?</h2>
						</div>
					</div>
					<div className="hero__vote-container">
						<div className="hero__thumbs hero__thumbs--up">
							<img src={thumbs} alt="thumbs-up" />
						</div>
						<div className="hero__thumbs hero__thumbs--down">
							<img src={thumbs} alt="thumbs-down" />
						</div>
					</div>
				</div>
			</div>
			<div className="hero__bg-gradient"></div>
		</div>
		{ !nobg ?
			(
				<div className="hero__pope-bg">
					<div className="hero__remaining-days">
						<div className="hero__remaining-days--closing">
							CLOSING IN
						</div>
						<div className="hero__remaining-days--days">
							22 days
						</div>
					</div>
				</div>
			)
			: null }
	</section>

);

Hero.propTypes = {
	nobg: PropTypes.bool,
}

Hero.defaultProps = {
	nobg: false
}

export default Hero;
