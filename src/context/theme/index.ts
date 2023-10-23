import { ThemeOptions, createTheme } from '@mui/material/styles';
/* 
Theme creator see how changes will effect the components(REALLY GOOD)
https://zenoo.github.io/mui-theme-creator/#Icon

Find colors that work well together 
https://m2.material.io/inline-tools/color/
*/

const customTheme: ThemeOptions = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#873dd6',
			contrastText: '#000000',
		},
		secondary: {
			main: '#d71e7b',
		},
		background: {
			default: '#191414',
			paper: '#252323',
		},
		text: {
			secondary: 'rgba(255,255,255,0.6)',
			disabled: 'rgba(255,255,255,0.38)',
			primary: 'rgba(255,255,255,0.87)',
		},
		divider: '#424242',
	},
});

export default customTheme;
