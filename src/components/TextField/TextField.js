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
				required={this.props.required}
				fieldNote={this.props.fieldNote}
			>
				<TextInput
					type={this.props.type}
					id={this.props.id}
					name={this.props.name}
					placeholder={this.props.placeholder}
				/>
			</Field>
		);
	}
}

TextField.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	fieldNote: PropTypes.string
};

TextField.defaultProps = {
	id: "textarea-field-1",
	label: "Fart",
	fieldNote: "This is a fieldnote."
};
