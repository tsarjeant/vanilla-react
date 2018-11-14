import React from "react";
import { storiesOf } from "@storybook/react";
import { TextField } from "./TextField";

let stories = storiesOf("Molecules/Forms/TextField", module);

stories.add("Default", () => (
	<TextField
		name="text-field-1"
		label="Label"
		type="text"
		required={true}
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="The is the field note."
	/>
));
