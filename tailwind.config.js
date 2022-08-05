/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			'xs': '430px',
			'sm': '640px',
			'md': '768px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {},
	},
	plugins: [],
}
