// @vendors
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// @styles
import './style.scss';

//assets
import kanye from '../../assets/images/kanye.png'
import mark from '../../assets/images/mark.png'
import cristina from '../../assets/images/cristina.png'
import malala from '../../assets/images/malala.png'

const bgs = {
	'kanye.png': kanye,
	'mark.png': mark,
	'cristina.png': cristina,
	'malala.png': malala,
}

// @utils
const timeFormat = (time) => '1 month ago' ;

// @utils
const calcPercentage = ({ votesUp = 0, votesDown = 0 }) => {
	if (!votesUp && !votesDown) return { percentageUP: 50, percentageDown: 50};

	const total = votesUp + votesDown;
	const percentageUP = Math.round((votesUp/total)*100);
	const percentageDown = Math.round((votesDown/total)*100);

	return { percentageUP, percentageDown };
}

const Ruling = ({
		data,
		dispatch,
		index
}) => {
	const {
		alreadyVoted,
		bgImg,
		category,
		description,
		isVoteDownSelected,
		isVoteUpSelected,
		startedOn,
		title,
		votesDown,
		votesUp,
	} = data;

	const { percentageUP, percentageDown } = calcPercentage({ votesUp, votesDown });
	
	const isDown = percentageDown > percentageUP;

	const handleVoteUp = () => dispatch(
		{
			type: 'SELECT_VOTE',
			payload: { 
				ruling: {
					...data,
					isVoteDownSelected: false,
					isVoteUpSelected: true
				},
				index,
			}
		}
	);
	const handleVoteDown = () => dispatch(
		{
			type: 'SELECT_VOTE',
			payload: { 
				ruling: {
					...data,
					isVoteDownSelected: true,
					isVoteUpSelected: false
				},
				index,
			}
		}
	);
	const handleVote = () => dispatch(
		{
			type: 'CAST_VOTE',
			payload: { 
				ruling: {
					...data,
					alreadyVoted: true,
					votesDown: isVoteDownSelected ? votesDown + 1 : votesDown,
					votesUp: isVoteUpSelected ? votesUp + 1 : votesUp,
				},
				index,
			}
		}
	);
	const handleResetVote = () => dispatch(
		{
			type: 'RESET_VOTE_STATUS',
			payload: { 
				ruling: {
					...data,
					alreadyVoted: false,
					isVoteUpSelected: true,
					isVoteDownSelected: false,
				},
				index,
			}
		}
	);

  return (
		<div className="ruling">
			<div className="ruling__main" style={{ backgroundImage: `url(${bgs[bgImg]})`}}>
				<div className="ruling__bg"></div>
				<div className="ruling__header">
					<div className={`ruling__majority ruling__majority${isDown ? '--down' : '--up'}`}>
						<img className="ruling__majority-icon" alt="majority"/>
					</div>
					<div className="ruling__title">{title}</div>
				</div>
				<div className="ruling__time-ago">
					<h5><b>{timeFormat(startedOn)}</b>{` in ${category}`}</h5>
				</div>
				<div className="ruling__description">
					<h4>{alreadyVoted ? 'Thank you for voting!' : description}</h4>
				</div>
				<div className="ruling__actions">
					{
					!alreadyVoted ?
						(
							<Fragment>
								<button
									className={`ruling__actions-vote ruling__actions-vote--up ${isVoteUpSelected ? 'ruling__actions-vote--selected' : ''}`}
									onClick={handleVoteUp}
								>
									<img className="ruling__actions-vote-icon" alt="vote-up"/>
								</button>
								<button
									className={`ruling__actions-vote ruling__actions-vote--down ${isVoteDownSelected ? 'ruling__actions-vote--selected' : ''}`}
									onClick={handleVoteDown}
								>
									<img className="ruling__actions-vote-icon" alt="vote-down" />
								</button>
								<button
									className="ruling__cast-vote"
									onClick={handleVote}
								>
									Vote now
								</button>
							</Fragment>
						)
						: <button
								className="ruling__cast-vote"
								onClick={handleResetVote}
							>
								Vote again
							</button>
					}
				</div>
				<div className="ruling__current" style={{ gridTemplateColumns: `${percentageUP}% ${percentageDown}%` }}>
					<div className="ruling__thumbs ruling__thumbs--up">
						<img className="ruling__icons-up"  alt="percent-up" /> {percentageUP}%
					</div>
					<div className="ruling__thumbs ruling__thumbs--down">
						{percentageDown}% <img className="ruling__icons-down" alt="percent-down" />
					</div>
				</div>
			</div>
		</div>
  );
}


Ruling.propTypes = {
	data: PropTypes.shape({
		alreadyVoted: PropTypes.bool,
		bgImg: PropTypes.string,
		category: PropTypes.string,
		description: PropTypes.string,
		isVoteDownSelected: PropTypes.bool,
		isVoteUpSelected: PropTypes.bool,
		startedOn: PropTypes.string,
		title: PropTypes.string,
		votesDown: PropTypes.number,
		votesUp: PropTypes.number,
	}),
	dispatch: PropTypes.func,
	index: PropTypes.number
}

Ruling.defaultProps = {
	data: {},
	dispatch: () => {}
}

export default Ruling;
