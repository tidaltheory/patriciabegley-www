import zazenConfig from '@zazen/prettier-config'

const config = {
	...zazenConfig,
	plugins: [
		...zazenConfig.plugins,
		'prettier-plugin-tailwindcss',
	],
}

export default config
