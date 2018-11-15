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
					placeholder={this.props.placeholder}
					disabled={this.props.disabled}
					aria-describedby={this.props.ariaDescribedBy}
				/>
			</Field>
		);
	}
}

TextField.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	fieldNote: PropTypes.string,
	required: PropTypes.bool,
	ariaDescribedBy: PropTypes.string
};

TextField.defaultProps = {
	id: "text-field-1",
	label: "Label",
	fieldNote: "This is a fieldnote.",
	ariaDescribedBy: "text-field"
};
