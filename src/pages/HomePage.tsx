import React from 'react';
import HomeFeed from '../components/UI/HomeFeed';
import GenreCarousel from '../components/UI/genreCarousel';
import { GenreFilter } from '../api/thirdParty/getManga';

const style: React.CSSProperties = {
	position: 'relative',
	zIndex: 2,
	top: '-25',
	paddingLeft: 50,
};

const genreToSubTextMapper = new Map<number, string>()
	.set(0, 'All the Shonen Jump hits are here!')
	.set(
		1,
		'A rollercoaster of emotions awaits as characters navigate the complexities of existence.'
	)
	.set(
		2,
		'Escape to a world where the rhythm of life sets the pace for heartwarming tales.'
	)
	.set(
		3,
		'Explore realms beyond imagination, where the supernatural bends the rules of reality.'
	);

const HomePage = () => {
	return (
		<>
			<div style={{ position: 'relative', zIndex: 1 }}>
				<HomeFeed />
			</div>
			{Object.entries(GenreFilter).map(([genre, genreId], index) => (
				<div
					key={genre}
					style={{ ...style, top: `${Number(style?.top) + 2 * index}rem` }}
				>
					<GenreCarousel
						genreTitle={genre}
						genreSubText={genreToSubTextMapper.get(index) ?? ''}
						genre={genreId}
					/>
				</div>
			))}
		</>
	);
};

export default HomePage;
