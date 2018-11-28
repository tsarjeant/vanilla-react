import React from "react";
import { storiesOf } from "@storybook/react";
import { Colors } from "./Colors";
import { FontFamilies } from "./FontFamilies";
import { FontSizes } from "./FontSizes";
import { Section } from "../Section/Section";

let stories = storiesOf("Atoms", module);

stories.add("Design Tokens", () => (
	<React.Fragment>
		<Section title="Brand Colors">
			<Colors
				listItems={[
					{
						name: "$color-brand-blue",
						value: "#0000ff",
						comment: ""
					}
				]}
			/>
		</Section>

		<Section title="Neutral Colors">
			<Colors
				listItems={[
					{
						name: "$color-neutral-white",
						value: "#fff",
						comment: ""
					},
					{
						name: "$color-neutral-gray-02",
						value: "#f9f9f9",
						comment: ""
					},
					{
						name: "$color-neutral-gray-07",
						value: "#eee",
						comment: ""
					},
					{
						name: "$color-neutral-gray-13",
						value: "#ddd",
						comment: ""
					},
					{
						name: "$color-neutral-gray-27",
						value: "#bbb",
						comment: ""
					},
					{
						name: "$color-neutral-gray-50",
						value: "#808080",
						comment: ""
					},
					{
						name: "$color-neutral-gray-60",
						value: "#666",
						comment: ""
					},
					{
						name: "$color-neutral-gray-73",
						value: "#444",
						comment: ""
					},
					{
						name: "$color-neutral-gray-93",
						value: "#131313",
						comment: ""
					},
					{
						name: "$color-neutral-black",
						value: "#000",
						comment: ""
					}
				]}
			/>
		</Section>

		<Section title="Utility Colors">
			<Colors
				listItems={[
					{
						name: "$color-utility-info",
						value: "#0192d0",
						comment: ""
					},
					{
						name: "$color-utility-info-light",
						value: "#d3f2ff",
						comment: ""
					},
					{
						name: "$color-utility-error",
						value: "#b12a0b",
						comment: ""
					},
					{
						name: "$color-utility-error-light",
						value: "#fdded8",
						comment: ""
					},
					{
						name: "$color-utility-success",
						value: "#03804d",
						comment: ""
					},
					{
						name: "$color-utility-success-light",
						value: "#d4f3e6",
						comment: ""
					},
					{
						name: "$color-utility-warning",
						value: "#a59b15",
						comment: ""
					},
					{
						name: "$color-utility-warning-light",
						value: "#fffecf",
						comment: ""
					}
				]}
			/>
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