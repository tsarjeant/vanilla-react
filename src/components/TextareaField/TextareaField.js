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
                    id={this.props.id} 
                    disabled={this.props.disabled}
                    aria-describedby={this.props.ariaDescribedBy}
                />
			</Field>
		);
	}
}

TextareaField.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	fieldNote: PropTypes.string,
	required: PropTypes.bool
};

TextareaField.defaultProps = {
	id: "textarea-field-1",
	label: "Label",
	fieldNote: "This is a fieldnote."
};
