const path = require("path");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

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
