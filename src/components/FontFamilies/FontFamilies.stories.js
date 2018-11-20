import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { FontFamilies } from "./FontFamilies";

let stories = storiesOf("Atoms/Global/FontFamilies", module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add("Default", () => <FontFamilies />);
