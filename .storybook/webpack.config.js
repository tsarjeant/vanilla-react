const path = require("path");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const scssToJson = require("scsstojson");

var items = [
	{
		src: "./src/css/scss/abstracts/_variables.scss",
		dest: "./src/data/brand-colors.json",
		lineStartsWith: "$color-brand-",
		allowVarValues: false
	},
	{
		src: "./src/css/scss/abstracts/_variables.scss",
		dest: "./src/data/neutral-colors.json",
		lineStartsWith: "$color-neutral-",
		allowVarValues: false
	},
	{
		src: "./src/css/scss/abstracts/_variables.scss",
		dest: "./src/data/utility-colors.json",
		lineStartsWith: "$color-utility-",
		allowVarValues: false
	},
	{
		src: "./src/css/scss/abstracts/_variables.scss",
		dest: "./src/data/font-sizes.json",
		lineStartsWith: "$font-size-",
		allowVarValues: false
	}
];

scssToJson(items, {}, function() {});

module.exports = (baseConfig, env, defaultConfig) => {
	// Extend defaultConfig as you need.

	// For example, add typescript loader:
	defaultConfig.module.rules.push({
		test: /\.svg$/,
		loader: "svg-sprite-loader",
		options: {
			extract: true,
			spriteFilename: svgPath => `icons${svgPath.substr(-4)}`
		}
	});
	defaultConfig.plugins.unshift(
		new SpriteLoaderPlugin({ plainSprite: true })
	);
	console.log(defaultConfig.output);
	return defaultConfig;
};
