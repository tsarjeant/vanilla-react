import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field } from "../Field/Field";
import { TextInput } from "../TextInput/TextInput";

export class TextField extends Component {
	render() {
		return (
			<Field
				id={this.props.id}
				label={this.props.label}
				hasError={this.props.hasError}
				disabled={this.props.disabled}
				required={this.props.required}
				fieldNote={this.props.fieldNote}
			>
				<TextInput
					type={this.props.type}
					id={this.props.id}
					name={this.props.name}
					value={this.props.value}
					placeholder={this.props.placeholder}
					disabled={this.props.disabled}
					readOnly={this.props.readOnly}
					required={this.props.required}
					aria-describedby={this.props.ariaDescribedBy}
				/>
			</Field>
		);
	}
}

TextField.propTypes = {
	id: PropTypes.string,
	type: PropTypes.oneOf([
		"text",
		"password",
		"datetime",
		"datetime-local",
		"date",
		"month",
		"time",
		"week",
		"number",
		"email",
		"url",
		"search",
		"tel"
	]),
	name: PropTypes.string,
	label: PropTypes.string,
	fieldNote: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	ariaDescribedBy: PropTypes.string,
	hasError: PropTypes.bool,
	value: PropTypes.string
};

TextField.defaultProps = {
	id: "text-field-1",
	label: "Label",
	fieldNote: "This is a fieldnote.",
	ariaDescribedBy: "text-field"
};
