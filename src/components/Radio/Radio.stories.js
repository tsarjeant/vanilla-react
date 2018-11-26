import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";
import { Radio } from "./Radio";

let stories = storiesOf("Atoms/Forms/Radio", module);

stories.add("Default", () => <Radio />);
