import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { InlineForm } from "./InlineForm";

let stories = storiesOf("Molecules/Forms/InlineForm", module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add("Default", () => (
	<InlineForm
		method="post"
		action="http://google.com"
		id="demo-form-id"
		placeholder="Placeholder"
		cta="Action"
	/>
));
