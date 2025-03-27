/** @type {import('tailwindcss').Config} */
export default {
	content: ['./_includes/**/*.{html,njk,md}', './content/**/*.{html,njk,md}'],
	theme: {
		extend: {
			colors: {
				white: '#fff',
				black: '#000',
			},

			typography: (theme) => ({
				DEFAULT: {
					css: {
						// '--tw-prose-links': theme('colors.white'),
						// '--tw-prose-code': theme('colors.grey.100'),
						// '--tw-prose-quotes': theme('colors.white'),
						// '--tw-prose-captions': theme('colors.grey.500'),
						// '--tw-prose-invert-body': theme('colors.grey.300'),

						'max-width': 'none',
						// color: theme('colors.grey.200'),

						'& > *': {
							'max-width': '65ch',
						},

						'& > .wide': {
							'max-width': '130ch',
						},

						'aside + h2': {
							'@container (width >= calc(65ch + 232px))': {
								'margin-top': '0',
							},
						},

						p: {
							'text-wrap': 'pretty',
						},

						'figure img': {
							border: '4px solid #fff',
						},
					},
				},
			}),
		},
	},
	plugins: [],
}
