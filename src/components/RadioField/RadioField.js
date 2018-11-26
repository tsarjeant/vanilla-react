import React, { Component } from "react";
import PropTypes from "prop-types";
import { OptionList } from "../OptionList/OptionList";
import { Field } from "../Field/Field";

export class RadioField extends Component {
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
				<OptionList listItems={this.props.listItems} />
			</Field>
		);
	}
}

RadioField.propTypes = {
	fieldClass: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	hasError: PropTypes.bool,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	fieldNote: PropTypes.string,
	title: PropTypes.string,
	listItems: PropTypes.array
};

RadioField.defaultProps = {
	listItems: [
		{
			id: "radio-1",
			name: "radioexample",
			text: "Radio 1",
			type: "radio"
		},
		{
			id: "radio-2",
			name: "radioexample",
			text: "Radio 2",
			type: "radio"
		},
		{
			id: "radio-3",
			name: "radioexample",
			text: "Radio 3",
			type: "radio"
		}
	]
};
