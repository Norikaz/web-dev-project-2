import React from 'react';

type WaveLabelProps = {
	text: string;
	htmlFor?: string;
};

const WaveLabel: React.FC<WaveLabelProps> = ({ text }) => {
	return (
		<label
			style={{
				position: 'absolute',
				left: 10,
				top: 13,
				display: 'block',
				width: '100%',
			}}
		>
			{text.split('').map((char, index) => (
				<span
					key={index}
					style={{
						transitionDelay: `${index * 50}ms`,
						position: 'relative',
						display: 'inline-block',
					}}
				>
					{char}
				</span>
			))}
		</label>
	);
};

export default WaveLabel;
