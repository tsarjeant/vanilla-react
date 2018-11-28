import React from "react";
import { storiesOf } from "@storybook/react";
import { AtomsText } from "./AtomsText";

let stories = storiesOf("Atoms/1/AtomsText", module);

stories.add("Default", () => <AtomsText />);
