import React, { useEffect, useState } from 'react';
import AnimeDetail from '../components/UI/AnimeDetail';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

const ReviewPage = () => {
	const { anime } = useParams();
	const [reviewText, setReviewText] = useState('');
	const [reviewerName, setReviewerName] = useState('');
	const [reviews, setReviews] = useState<{ reviewerName: string; reviewText: string }[]>([]);

	// Ignore - Fixes broken scroll on page/componenet render
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleReviewSubmit = () => {
		const newReview = {
			reviewerName,
			reviewText,
		};

		// These displays reviews on the page, and clears previous input once submitted.
		setReviews(prevReviews => [...prevReviews, newReview]);
		setReviewText('');
		setReviewerName('');
	};

	return (
		<div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
			<h2 style={{ textAlign: 'center' }}>{anime} - Details and Reviews</h2>
			<div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
				{anime ? <AnimeDetail anime={anime} /> : <p style={{ textAlign: 'center' }}>Could not find that anime</p>}
			</div>
			<div style={{ padding: '20px', textAlign: 'center' }}>
				<h3>Reviews</h3>
				{reviews.map((review, index) => (
					<p key={index}>{`${review.reviewerName}: ${review.reviewText}`}</p>
				))}

				{/* Review input fields */}
				<TextField
					label="Your Name"
					variant="outlined"
					fullWidth
					margin="normal"
					focused
					value={reviewerName}
					placeholder="eg; John Smith"
					onChange={e => setReviewerName(e.target.value)}
				/>
				<TextField
					label="Your Review"
					variant="outlined"
					fullWidth
					multiline
					rows={4}
					margin="normal"
					focused
					value={reviewText}
					placeholder="Post your thoughts..."
					onChange={e => setReviewText(e.target.value)}
				/>
				<Button variant="contained" color="primary" onClick={handleReviewSubmit}>
					Submit Review
				</Button>
			</div>
		</div>
	);
};

export default ReviewPage;
