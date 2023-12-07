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
import DrawerItems from './DrawerItems';
import { GetMangaSearchResponse } from '../../../api/getManga';
import './styles/NavBar.css'; // Make sure the path to the CSS file is correct

const NavBar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [mangaData, setMangaData] = useState<GetMangaSearchResponse[]>([]);

	const toggleDrawer = () => {
		setIsDrawerOpen(prevState => !prevState);
	};

	return (
		<>
			<Box sx={{ display: 'flex' }}>
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
						<Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
							AnimeCritic
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
				<Drawer anchor={'left'} open={isDrawerOpen} onClose={toggleDrawer}>
					<DrawerItems
						toggleDrawer={toggleDrawer}
						onMangaHover={setMangaData}
					/>
				</Drawer>
			</Box>
			<Box
				className="manga-display-box"
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					zIndex: 2000, // Ensures it's above other elements
				}}
			>
				{mangaData.map((manga, index) => (
					<img
						key={index}
						src={manga.image}
						alt={manga.title}
						className="manga-image"
					/>
				))}
			</Box>
		</>
	);
};

export default NavBar;
