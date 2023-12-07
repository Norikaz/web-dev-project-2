import React, { useState } from 'react';
import {
	AppBar,
	Box,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
	Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerItems from './DrawerItems';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
	const navigate = useNavigate();
	const handleLoginClick = () => {
		navigate('/login');
	};

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(prevState => !prevState);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="sticky">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={toggleDrawer}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1 }}
						className="fadeInDown"
					>
						<NavLink
							to="/"
							style={{ textDecoration: 'none', color: 'inherit' }}
							className="anime-critic-title"
						>
							AnimeCritic
						</NavLink>
					</Typography>
					<Button
						color="inherit"
						onClick={handleLoginClick}
						className="log-in-button fadeInDown"
					>
						Log in
					</Button>
				</Toolbar>
			</AppBar>
			<Drawer anchor={'left'} open={isDrawerOpen} onClose={toggleDrawer}>
				<DrawerItems toggleDrawer={toggleDrawer} />
			</Drawer>
		</Box>
	);
};

export default NavBar;
