import { ThemeOptions, createTheme } from '@mui/material/styles';

const customTheme: ThemeOptions = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#1ED760',
		},
		secondary: {
			main: '#9c27b0',
		},
		background: {
			default: '#191414',
			paper: '#252323',
		},
		text: {
			primary: 'rgba(255,255,255,0.87)',
			secondary: 'rgba(255,255,255,0.6)',
			disabled: 'rgba(255,255,255,0.38)',
		},
		divider: '#424242',
	},
});

export default customTheme;
