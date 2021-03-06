const path = require("path");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const scssToJson = require("scsstojson");

var variableItems = [
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

scssToJson(variableItems, {}, function() {});

module.exports = (baseConfig, env, defaultConfig) => {
	//SVG Icon Sprite Loader
	defaultConfig.module.rules.push({
		test: /\.svg$/,
		loader: "svg-sprite-loader",
		options: {
			extract: true, //makes the external svg sprite file
			spriteFilename: svgPath => `icons${svgPath.substr(-4)}` //name icon sprite file
		}
	});
	defaultConfig.plugins.unshift(
		new SpriteLoaderPlugin({ plainSprite: true })
	);
	return defaultConfig;
};
