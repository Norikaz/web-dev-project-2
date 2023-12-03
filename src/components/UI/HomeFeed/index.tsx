import React, { useEffect, useState } from 'react';
import {
	Box,
	Card,
	CardContent,
	CircularProgress,
	Typography,
} from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RESPONSIVE, extractGenres } from './homeFeedHelper';
import getTopAnime, {
	GetTopAnimeResponse,
} from '../../../api/thirdParty/getTopAnime';
import { formatSypnosis } from '../genreCarousel/genreCard';

import './styles/index.scss';

const HomeFeed = () => {
	const [topAnime, setTopAnime] = useState<GetTopAnimeResponse[] | undefined>();

	useEffect(() => {
		getTopAnime().then(result => setTopAnime(result));
	}, []);

	const genres: string[] | undefined = extractGenres(topAnime);

	const homeFeedText = topAnime?.map((img, index) => {
		return (
			<div className="home-feed-card" key={`home-feed-card-${index}`}>
				<div className="feed-card-description">
					<Card elevation={24} sx={{ opacity: 0.9 }}>
						<CardContent>
							<Typography variant="h3">{img.title}</Typography>
							<Typography variant="overline" key={`genre-${index}`}>
								Genres✦ {genres && genres[index]}
							</Typography>
							<Typography variant="body1">
								{formatSypnosis(img.synopsis)}
							</Typography>
						</CardContent>
					</Card>
				</div>
				<img className="home-feed-image" src={img.image} />
			</div>
		);
	});

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Carousel
					infinite={true}
					arrows
					responsive={RESPONSIVE}
					autoPlay
					autoPlaySpeed={8000}
				>
					{homeFeedText ?? <CircularProgress />}
				</Carousel>
			</Box>
		</>
	);
};

export default HomeFeed;
