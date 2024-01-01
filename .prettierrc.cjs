module.exports = {
	printWidth: 100,
	semi: true,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: 'es5',
	useTabs: true,
	plugins: ['./node_modules/prettier-plugin-astro'],
	overrides: [
		{
			files: ['.*', '*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
		{
			files: ['**/*.astro'],
			options: {
				parser: 'astro',
			},
		},
	],
};