import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { FontSizes } from "./FontSizes";

let stories = storiesOf("Atoms/Global/FontSizes", module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add("Default", () => <FontSizes />);
