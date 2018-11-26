import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field } from "../Field/Field";
import { OptionList } from "../OptionList/OptionList";

export class CheckboxField extends Component {
	render() {
		const fieldClass = "";

		return (
			<Field
				className={fieldClass}
				id={this.props.id}
				label={this.props.label}
				hasError={this.props.hasError}
				disabled={this.props.disabled}
				required={this.props.required}
				fieldNote={this.props.fieldNote}
				title={this.props.title}
			>
				<OptionList
					listItems={this.props.listItems}
					inputChange={this.handleInputChange}
				/>
			</Field>
		);
	}
}

CheckboxField.propTypes = {
	listItems: PropTypes.array,
	fieldClass: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	hasError: PropTypes.bool,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	fieldNote: PropTypes.string,
	title: PropTypes.string,
	inputChange: PropTypes.func
};

CheckboxField.defaultProps = {
	listItems: [
		{
			id: "checkbox-1",
			name: "checkbox-example",
			text: "Checkbox 1",
			type: "checkbox"
		},
		{
			id: "checkbox-2",
			name: "checkbox-example",
			text: "Checkbox 2",
			type: "checkbox"
		},
		{
			id: "checkbox-3",
			name: "checkbox-example",
			text: "Checkbox 3",
			type: "checkbox"
		}
	]
};
