const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx,json}"],
  theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				primary: {
					DEFAULT: 'hsl(180, 66%, 49%)',
					bg: 'hsl(257, 27%, 26%)'
				},
				secondary: {
					DEFAULT: 'hsl(0, 87%, 67%)'
				},
				neutral: {
					gray: 'hsl(0, 0%, 75%)',
					'gray-violet': 'hsl(257, 7%, 63%)',
					'dark-blue': 'hsl(255, 11%, 22%)',
					'dark-violet': 'hsl(260, 8%, 14%)'
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
}
