import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "../src/css/style.css";

addDecorator(
	withInfo({
		inline: true
	})
);

const req = require.context("../src", true, /.stories.js$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
