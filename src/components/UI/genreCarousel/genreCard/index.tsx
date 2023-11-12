import React from 'react';
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material';
import RateReviewIcon from '@mui/icons-material/RateReview';

import './styles/index.scss';

const MAX_SYPNOSIS_LENGTH = 250;

interface GenreCardProps {
	title: string;
	sypnosis: string;
	image: string;
}

export const formatSypnosis = (sypnosis: string) => {
	if (sypnosis.length <= MAX_SYPNOSIS_LENGTH) {
		return sypnosis;
	} else {
		return `${sypnosis.substring(0, MAX_SYPNOSIS_LENGTH)} ...`;
	}
};

const GenreCard = ({ title, sypnosis, image }: GenreCardProps) => {
	return (
		<>
			<Card className="genre-card">
				<CardActionArea className="genre-card-action">
					<CardMedia className="genre-card-img" component="img" image={image} />
					<CardContent className="genre-card-content">
						<Typography gutterBottom variant="h5">
							{title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Manga/Anime
						</Typography>
					</CardContent>
				</CardActionArea>
				<Box
					sx={{
						position: 'absolute',
						top: '3%',
						left: '5%',
					}}
					className="genre-overlay"
				>
					<Typography variant="h5">{title}</Typography>
					<Typography variant="body1" color="text.secondary">
						{formatSypnosis(sypnosis)}
					</Typography>
					{/* onclick opens the review page for this card */}
					<IconButton
						color="primary"
						sx={{
							position: 'absolute',
							top: '18em',
							left: 0,
						}}
					>
						<RateReviewIcon fontSize="large" />
					</IconButton>
				</Box>
			</Card>
		</>
	);
};

export default GenreCard;
