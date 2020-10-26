// @vendors
import React, { useState }from 'react';
import PropTypes from 'prop-types';

// @styles
import './style.scss';

import xicon from '../../assets/images/xicon.png';

const Message = ({
	className,
	title,
	titleHighLight,
	content
	}) => {
	const [visible, setVisible] = useState(true);

	if (!visible) {
		return null;
	}

	return (
		<article className={`message ${className}`}>
			<div className="message__title">
				<h1>{title}</h1>
				<h1 className="message__title--big-bold">{titleHighLight}</h1>
			</div>
			<div className="message__content">
				{content}
			</div>
			<div className="message__close">
				<button
					className="message__close-button"
					onClick={() => setVisible(false)}
				>
					<img src={xicon} alt="x-icon" />
				</button>
			</div>
		</article>
	);
};

Message.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	titleHighLight: PropTypes.string,
	content: PropTypes.string,
}

Message.defaultProps = {
	className: '',
	title: '',
	titleHighLight: '',
	content: '',
}

export default Message;