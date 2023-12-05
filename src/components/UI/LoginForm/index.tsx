import React from 'react';
import { Paper, Input, Button, Typography, Box, FormControlLabel, Checkbox } from '@mui/material';

const LoginForm = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<Paper elevation={3} sx={{ padding: '40px', maxWidth: '400px', width: '100%', border: '1px solid white', backgroundColor: '#16151d' }}>
				<Typography variant="h4" align="center" sx={{ marginBottom: '20px' }} gutterBottom>
					User Login
				</Typography>
				<Input
					sx={{
						marginBottom: '40px',
						color: 'white',
						'&:before': {
							borderBottom: '1px solid white',
						},
					}}
					fullWidth
					placeholder="Username or Email"
				/>
				<Input
					sx={{
						marginBottom: '20px',
						color: 'white',
						'&:before': {
							borderBottom: '1px solid white',
						},
					}}
					type="password"
					fullWidth
					placeholder="Password"
				/>
				<FormControlLabel control={<Checkbox color="primary" />} label="Remember me" sx={{ marginTop: '10px' }} />
				<Button variant="contained" color="primary" fullWidth sx={{ marginTop: '20px' }}>
					Login
				</Button>
			</Paper>
		</Box>
	);
};

export default LoginForm;
