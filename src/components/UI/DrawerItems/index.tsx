import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, IconButton, Divider } from '@mui/material';

import './styles/index.scss';

interface Props {
	toggleDrawer: () => void;
}

const DrawerItems = ({ toggleDrawer }: Props) => {
	return (
		<>
			<Box sx={{ width: 300 }}>
				<div className="drawer-header">
					<IconButton onClick={toggleDrawer}>
						<ChevronLeftIcon color="primary" />
					</IconButton>
				</div>
				<Divider />
				{/* 
        TODO: add list items for different pages that the user can select
        ref: https://mui.com/material-ui/react-drawer/
        */}
			</Box>
		</>
	);
};

export default DrawerItems;
