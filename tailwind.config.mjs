/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				inner: '1080px', // インナー幅
				paddingPC: '25px', // PC用の余白
				paddingSP: '15px', // スマホ用の余白
			},
		},
		fontFamily: {
			notosans: ['Noto Sans JP', 'sans-serif'],
			notoserif: ['Noto Serif JP', 'serif'],
			gotu: ['Gotu', 'sans-serif'],
			lato: ['Lato', 'sans-serif'],
		},
		colors: {
			// dark-green ⇨ green3へ変更
			black: '#111111',
			black2: '#002936',
			white: '#ffffff',
			white2: '#f2f2f2',
			green: '#408f95',
			green2: '#ddf0f1',
			green3: '#0d2936',
			brown: '#796a64',
			red: '#c94800',
		},
		screens: {
			sm: '600px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		},
	},
	plugins: [],
};
