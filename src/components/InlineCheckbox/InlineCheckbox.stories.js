import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { InlineCheckbox } from "./InlineCheckbox";

let stories = storiesOf("Molecules/Forms/InlineCheckbox", module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add("Default", () => <InlineCheckbox />);
