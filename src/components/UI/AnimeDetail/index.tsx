import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, CardMedia, Typography } from '@mui/material';
import { getSingleManga, GetMangaSearchResponse } from '../../../api/getManga';

interface AnimeDetailProps {
	anime: string;
}

const AnimeDetail: React.FC<AnimeDetailProps> = () => {
	const [animeDetails, setAnimeDetails] = useState<GetMangaSearchResponse | null>(null);
	const { anime: currentAnimeParam } = useParams();

	useEffect(() => {
		const fetchAnimeDetails = async () => {
			try {
				const details = await getSingleManga(currentAnimeParam || '');
				setAnimeDetails(details);
			} catch (error) {
				console.error(error);
				('Error');
			}
		};

		fetchAnimeDetails();
	}, [currentAnimeParam]);

	if (!animeDetails) {
		return <CircularProgress />;
	}

	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<CardMedia component="img" src={animeDetails.image} style={{ borderRadius: '12px', marginRight: '20px', width: '230px' }} />
			<div>
				<Typography variant="h5">{animeDetails.title}</Typography>
				<Typography variant="body2" color="text.secondary">
					Synopsis: {animeDetails.synopsis}
				</Typography>
			</div>
		</div>
	);
};

export default AnimeDetail;
