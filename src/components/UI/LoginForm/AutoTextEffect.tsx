import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
interface AutoTextEffectProps {
	text?: string;
	speed?: number;
}

const AutoTextEffect: React.FC<AutoTextEffectProps> = ({
	text = 'Log in...',
	speed = 1,
}) => {
	const [index, setIndex] = useState(1);
	const effectiveSpeed = 300 / speed;

	useEffect(() => {
		const timer = setTimeout(() => {
			setIndex(prevIndex => {
				return prevIndex < text.length ? prevIndex + 1 : 1;
			});
		}, effectiveSpeed);

		return () => clearTimeout(timer);
	}, [index, effectiveSpeed, text.length]);

	return <h4 className="auto-text-effect">{text.slice(0, index)}</h4>;
};

AutoTextEffect.propTypes = {
	text: PropTypes.string,
	speed: PropTypes.number,
};

export default AutoTextEffect;
