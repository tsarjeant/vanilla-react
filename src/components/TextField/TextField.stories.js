import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { TextField } from "./TextField";

let stories = storiesOf("Molecules/Forms/TextField", module);

stories.addDecorator(withInfo).addDecorator(withSmartKnobs).addDecorator(withKnobs);

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
