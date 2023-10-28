import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RESPONSIVE, extractGenres } from './homeFeedHelper';
import { getMangaListResponse } from '../../../api/getMangaList';

import './styles/index.scss';

const MOCK_API_RESPONSE: getMangaListResponse[] = [
	{
		id: 1,
		image:
			'https://cdn.vox-cdn.com/thumbor/yly42vcGVd2c9KfBEY0b_70oa6s=/0x0:1600x900/920x613/filters:focal(672x322:928x578):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71741860/Jujutsu_Kaisen_season_2_01.6.jpg',
		synopsis:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptates amet odit optio. Quasi molestias alias eius laudantium natus quam odio. Nulla quis dolorem quo eveniet unde repudiandae ipsum? Aperiam!',
		title: 'Some Title',
		genres: [{ name: 'Action' }, { name: 'Adventure' }, { name: 'Fantasy' }],
	},
	{
		id: 2,
		image: 'https://images3.alphacoders.com/131/thumbbig-1319747.webp',
		synopsis:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptates amet odit optio. Quasi molestias alias eius laudantium natus quam odio. Nulla quis dolorem quo eveniet unde repudiandae ipsum? Aperiam!',
		title: 'Some Title',
		genres: [{ name: 'Action' }, { name: 'Adventure' }, { name: 'Fantasy' }],
	},
];

const HomeFeed = () => {
	const genres: string[] = extractGenres(MOCK_API_RESPONSE);

	const homeFeedText = MOCK_API_RESPONSE.map((img, index) => {
		return (
			<div className="home-feed-card" key={`home-feed-card-${index}`}>
				<div className="feed-card-description">
					<Card elevation={24} sx={{ opacity: 0.9 }}>
						<CardContent>
							<Typography variant="h2">{img.title}</Typography>
							<Typography variant="overline" key={`genre-${index}`}>
								Genres✦ {genres[index]}
							</Typography>
							<Typography variant="body1">{img.synopsis}</Typography>
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
					{homeFeedText}
				</Carousel>
			</Box>
		</>
	);
};

export default HomeFeed;
