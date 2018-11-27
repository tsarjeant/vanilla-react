import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Button } from "./Button";

let stories = storiesOf("Molecules/Buttons/Button", module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add("Default", () => (
	<Button onClick={() => console.log("clicked!!")} />
));

stories.add("Secondary", () => <Button issecondary text="Secondary Button" />);

stories.add("Icon Before", () => <Button iconname="plus" text="Icon Before" />);

stories.add("Icon After", () => (
	<Button iconnameafter="minus" text="Icon Before" />
));

stories.add("Icon Only", () => <Button iconname="minus" text={false} />);
