import * as React from 'react'; // Import React Components, hooks
import AppBar from '@mui/material/AppBar'; // Import MUI Components for drawer
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu'; // Import MUI Icons for drawer
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MovieIcon from '@mui/icons-material/Movie';
import BookIcon from '@mui/icons-material/Book';
import StarRateIcon from '@mui/icons-material/StarRate';

const drawerWidth = 240; // Set drawer width

interface Props {
	// Define Props interface
	window?: () => Window;
	toggleDrawer: () => void;
}

export default function DrawerItems(props: Props) {
	// Declare DrawerItems component
	const { window } = props; // Destructure props
	const [mobileOpen, setMobileOpen] = React.useState(false); // useState hook from React to manage drawer state. mobileOpen is a bool that will be T if drawer is open, F if closed. Initial state is F so the drawer is closed by default.

	const handleDrawerToggle = () => {
		// Toggle drawer state via button click
		setMobileOpen(!mobileOpen);
	};

	const drawer = // Define drawer JSX
		(
			<div>
				<Toolbar />
				<Divider />
				<List>
					{['Movies', 'Manga', 'Anime', 'Top Rated'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									{
										[
											<MovieIcon key="movies" />,
											<BookIcon key="manga" />,
											<MovieIcon key="anime" />,
											<StarRateIcon key="top-rated" />,
										][index]
									}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</div>
		);

	const container =
		window !== undefined ? () => window().document.body : undefined; // If window is defined, set container to window.document.body, else set to undefined

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
						Review Hub
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="review sections"
			>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
							top: '64px', // Height of your AppBar
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: drawerWidth },
				}}
			>
				<Toolbar />
				{/* <Typography paragraph>
					Welcome to the Review Hub! Browse through our movie, manga, and anime
					reviews. Dive into the top-rated selections and discover something
					new!
				</Typography> */}
			</Box>
		</Box>
	);
}
