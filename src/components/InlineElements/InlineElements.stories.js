import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";
import { InlineElements } from "./InlineElements";

let stories = storiesOf("Atoms/Text/InlineElements", module);

stories.add("Default", () => <InlineElements />);
