import React, { useState } from 'react';
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MovieIcon from '@mui/icons-material/Movie';
import BookIcon from '@mui/icons-material/Book';
import StarRateIcon from '@mui/icons-material/StarRate';
import getManga, {
	GenreFilter,
	GetMangaSearchResponse,
} from '../../../../api/getManga';

const drawerWidth = 240;

interface DrawerItemsProps {
	window?: () => Window;
	toggleDrawer: () => void;
}

const DrawerItems: React.FC<DrawerItemsProps> = ({ window, toggleDrawer }) => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [hoveredGenre, setHoveredGenre] = useState<GenreFilter | null>(null);
	const [mangaData, setMangaData] = useState<GetMangaSearchResponse[]>([]);

	const handleGenreHover = async (genre: GenreFilter) => {
		const data = await getManga(genre);
		console.log('data returned from site:', data);
		setMangaData(data);
		setHoveredGenre(genre);
	};

	const genres = {
		Action: GenreFilter.Action,
		Drama: GenreFilter.Drama,
		SliceOfLife: GenreFilter.SliceOfLife,
		Supernatural: GenreFilter.Supernatural,
	};

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawerContent = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{Object.entries(genres).map(([genreName, genreId]) => (
					<ListItem key={genreName} disablePadding>
						<ListItemButton
							onMouseEnter={() => {
								console.log('Mouse click');
								handleGenreHover(genreId);
							}}
						>
							{/* Replace with appropriate icons based on genre */}
							<ListItemIcon>{/* Example icon */ <BookIcon />}</ListItemIcon>
							<ListItemText primary={genreName} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			{mangaData && mangaData.length > 0 && (
				<Box sx={{ padding: 2 }}>
					{mangaData.map((manga, index) => (
						<img
							key={index}
							src={manga.image}
							alt={manga.title}
							style={{ width: '100%', marginBottom: 10 }}
						/>
					))}
				</Box>
			)}
		</div>
	);

	const container = window !== undefined ? window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						AnimeCritic
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				container={container}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{ keepMounted: true }}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
				}}
			>
				{drawerContent}
			</Drawer>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: 'none', sm: 'block' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: drawerWidth,
						top: '64px',
					},
				}}
				open
			>
				{drawerContent}
			</Drawer>
		</Box>
	);
};

export default DrawerItems;
