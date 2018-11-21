import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { IconGrid } from "./IconGrid";

let stories = storiesOf("Atoms/Icons/IconGrid", module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add("Default", () => <IconGrid />);
