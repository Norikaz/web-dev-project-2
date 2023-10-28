import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { CircularProgress, Typography } from '@mui/material';
import { RESPONSIVE_GENRE_CAROUSEL } from '../HomeFeed/homeFeedHelper';
import getManga, { GenreFilter } from '../../../api/getManga';
import GenreCard from './genreCard';

import './styles/index.scss';

interface Props {
	genreTitle: string;
	genreSubText: string;
	genre: GenreFilter;
}

const GenreCarousel = ({ genreTitle, genreSubText, genre }: Props) => {
	const [cards, setCards] = useState<JSX.Element[] | undefined>();
	useEffect(() => {
		getManga(genre).then(response => {
			const cards = response.map((data, index) => (
				<GenreCard
					title={data.title}
					sypnosis={data.synopsis}
					image={data.image}
					key={index}
				/>
			));
			setCards(cards);
		});
	}, []);

	return (
		<>
			<Typography variant="h2" color="primary">
				{genreTitle}
			</Typography>
			<Typography variant="overline" color="secondary" fontSize="medium">
				{genreSubText}
			</Typography>
			<Carousel
				className="genre-carousel"
				arrows
				responsive={RESPONSIVE_GENRE_CAROUSEL}
				slidesToSlide={5}
			>
				{cards ?? <CircularProgress />}
			</Carousel>
		</>
	);
};

export default GenreCarousel;
