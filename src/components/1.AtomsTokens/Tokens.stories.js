import React from "react";
import { storiesOf } from "@storybook/react";
import { Colors } from "./Colors";
import { FontFamilies } from "./FontFamilies";
import { FontSizes } from "./FontSizes";
import { Section } from "../Section/Section";
import brandColors from "../../data/brand-colors.json";
import neutralColors from "../../data/neutral-colors.json";
import utilityColors from "../../data/utility-colors.json";

let stories = storiesOf("Atoms", module);

stories.add("Design Tokens", () => (
	<React.Fragment>
		<Section title="Brand Colors">
			<Colors listItems={brandColors.items} />
		</Section>

		<Section title="Neutral Colors">
			<Colors listItems={neutralColors.items} />
		</Section>

		<Section title="Utility Colors">
			<Colors listItems={utilityColors.items} />
		</Section>

		<Section title="Font Families">
			<FontFamilies />
		</Section>

		<Section title="Font Sizes">
			<FontSizes />
		</Section>

		<Section title="Borders">TODO</Section>

		<Section title="Spacing">TODO</Section>
	</React.Fragment>
));
