import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field } from "../Field/Field";
import { Textarea } from "../Textarea/Textarea";

export class TextareaField extends Component {
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
				<Textarea 
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

TextareaField.propTypes = {
	id: PropTypes.string,
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

TextareaField.defaultProps = {
	id: "textarea-field-1",
	label: "Label",
	fieldNote: "This is a fieldnote."
};
