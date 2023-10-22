import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {
	AppBar,
	Box,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerItems from '../DrawerItems';

const NavBar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(prevState => !prevState);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
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
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						APP NAME
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Drawer anchor={'left'} open={isDrawerOpen} onClose={toggleDrawer}>
				<DrawerItems toggleDrawer={toggleDrawer} />
			</Drawer>
		</Box>
	);
};

export default NavBar;
