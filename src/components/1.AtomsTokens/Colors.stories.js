import React from "react";
import { storiesOf } from "@storybook/react";
import { Colors } from "./Colors";

let stories = storiesOf("Atoms", module);

stories.add("Colors", () => <Colors />);
