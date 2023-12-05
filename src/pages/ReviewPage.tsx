import React, { useEffect, useState } from 'react';
import AnimeDetail from '../components/UI/AnimeDetail';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import getReviewByTitle, { ReviewResponse } from '../api/internal/getMangaReviewsByTitle';
import postReview from '../api/internal/postMangaReview';

const ReviewPage = () => {
	const { anime } = useParams();
	const [reviewContent, setReviewContent] = useState('');
	const [reviews, setReviews] = useState<ReviewResponse[]>([]);

	// Ignore - Fixes broken scroll on page/componenet render
	useEffect(() => {
		window.scrollTo(0, 0);
		getReviewByTitle(anime ?? '').then(response => setReviews(response.data));
	}, []);

	const handleReviewSubmit = () => {
		const newReview = {
			content: reviewContent,
		};

		// These displays reviews on the page, and clears previous input once submitted.
		setReviews(prevReviews => [...prevReviews, newReview]);
		setReviewContent('');
		postReview({ content: newReview.content, mangaTitle: anime ?? '' });
	};

	return (
		<div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
			<h2 style={{ textAlign: 'center' }}>{anime} - Details and Reviews</h2>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					padding: '20px',
				}}>
				{anime ? <AnimeDetail anime={anime} /> : <p style={{ textAlign: 'center' }}>Could not find that anime</p>}
			</div>
			<div style={{ padding: '20px', textAlign: 'center' }}>
				<h3>Reviews</h3>
				{reviews.map((review, idx) => (
					<p key={idx + 1}>{`${idx + 1}: ${review.content}`}</p>
				))}

				<TextField
					label="Your Review"
					variant="outlined"
					fullWidth
					multiline
					rows={4}
					margin="normal"
					focused
					value={reviewContent}
					placeholder="Post your thoughts..."
					onChange={e => setReviewContent(e.target.value)}
				/>
				<Button variant="contained" color="primary" onClick={handleReviewSubmit}>
					Submit Review
				</Button>
			</div>
		</div>
	);
};

export default ReviewPage;
