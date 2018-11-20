import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { IconGrid } from "./IconGrid";

let stories = storiesOf("Atoms/Global/IconGrid", module);

stories
	.addDecorator(withInfo)
	.addDecorator(withSmartKnobs)
	.addDecorator(withKnobs);

stories.add("Default", () => <IconGrid />);
