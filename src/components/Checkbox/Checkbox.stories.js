import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Checkbox } from "./Checkbox";

let stories = storiesOf("Atoms/Forms/Checkbox", module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add("Default", () => <Checkbox />);
