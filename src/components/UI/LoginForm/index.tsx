import React, { ChangeEvent, useState } from 'react';
import {
	Paper,
	TextField,
	Button,
	Typography,
	Box,
	FormControlLabel,
	Checkbox,
} from '@mui/material';
import WaveLabel from './WaveLabel';
import AutoTextEffect from './AutoTextEffect';
import './styles/index.scss';

const LoginForm = () => {
	const [backgroundBlur, setBackgroundBlur] = useState(20);
	const [formBackground, setFormBackground] = useState(1);

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		const length = e.target.value.length;
		const blurValue = Math.max(0, 20 - length * 2);
		setBackgroundBlur(blurValue);

		const backgroundOpacity = Math.max(0.5, 1 - length * 0.05);
		setFormBackground(backgroundOpacity);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				position: 'relative',
			}}
		>
			<div
				style={{
					backgroundImage:
						"url('https://wallpapers.com/images/hd/anime-blue-sky-and-girl-x9xbq3o91jcj2jyn.jpg')",
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					filter: `blur(${backgroundBlur}px)`,
					zIndex: -1,
				}}
			></div>

			<Paper
				elevation={3}
				sx={{
					padding: '60px',
					maxWidth: '400px',
					width: '100%',
					border: '1px solid #5E2A95',
					backgroundColor: `rgba(22, 21, 29, ${formBackground})`,
					transition: 'background-color 0.3s ease',
					zIndex: 2,
					position: 'relative',
				}}
			>
				<AutoTextEffect text="Log in..." speed={1.25} />{' '}
				<div className="form-control">
					<TextField
						sx={{
							marginBottom: '20px',
							color: 'white',
							'& .MuiInput-underline:before': {
								borderBottom: '1px solid #5E2A95',
							},
						}}
						fullWidth
						required
						label=""
						InputProps={{
							endAdornment: <WaveLabel text="Email" />,
						}}
					/>
				</div>
				<div className="form-control">
					<TextField
						sx={{
							marginBottom: '20px',
							color: '#5E2A95',
							'& .MuiInput-underline:before': {
								borderBottom: '1px solid #5E2A95',
							},
						}}
						type="password"
						fullWidth
						required
						label=""
						onChange={handlePasswordChange}
						InputProps={{
							endAdornment: <WaveLabel text="Password" />,
						}}
					/>
				</div>
				<FormControlLabel
					control={<Checkbox color="primary" />}
					label="Remember me"
					sx={{ marginTop: '10px' }}
				/>
				<Button
					variant="contained"
					color="primary"
					fullWidth
					sx={{ marginTop: '20px' }}
				>
					Log in
				</Button>
			</Paper>
		</Box>
	);
};

export default LoginForm;
