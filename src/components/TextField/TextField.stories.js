import React from "react";
import { storiesOf } from "@storybook/react";
import { TextField } from "./TextField";
import { TextInput } from "../TextInput/TextInput";

let stories = storiesOf("Molecules/Forms/TextField", module);

stories.add("Default", () => (
	<TextField
		name="text-field-1"
		label="Label"
		type="text"
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="The is the field note."
		ariaDescribedBy="text-field"
	/>
));

stories.add("Required", () => (
	<TextField
		name="text-field-1"
		label="Label"
		type="text"
		required={true}
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="This is a required field."
		ariaDescribedBy="required-text-field"
	/>
));

stories.add("Disabled", () => (
	<TextField
		name="text-field-1"
		label="Label"
		type="text"
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="The is a disabled field."
		ariaDescribedBy="disabled-text-field"
		disabled
	/>
));

stories.add("Error", () => (
	<TextField
		hasError
		name="text-field-1"
		label="Label"
		type="text"
		required
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="There is an error."
		ariaDescribedBy="error-text-field"
	/>
));
