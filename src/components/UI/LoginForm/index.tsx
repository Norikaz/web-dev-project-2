import React from 'react';
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
import './styles/index.scss';

const LoginForm = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<Paper
				elevation={3}
				sx={{
					padding: '40px',
					maxWidth: '400px',
					width: '100%',
					border: '1px solid purple',
					backgroundColor: '#16151d',
				}}
			>
				<Typography
					variant="h4"
					align="center"
					sx={{ marginBottom: '20px' }}
					gutterBottom
				>
					User Login
				</Typography>
				<div className="form-control">
					<TextField
						sx={{
							marginBottom: '20px',
							color: 'white',
							'& .MuiInput-underline:before': {
								borderBottom: '1px solid white',
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
							color: 'white',
							'& .MuiInput-underline:before': {
								borderBottom: '1px solid white',
							},
						}}
						type="password"
						fullWidth
						required
						label=""
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
					Login
				</Button>
			</Paper>
		</Box>
	);
};

export default LoginForm;
