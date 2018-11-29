import React, { Component } from "react";
import PropTypes from "prop-types";
import { Select } from "../Select/Select";
import { Field } from "../Field/Field";

export class SelectField extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
		console.log(event.target.value);
	}

	render() {
		return (
			<Field
				className="c-field"
				id={this.props.id}
				label={this.props.label}
				hasError={this.props.hasError}
				disabled={this.props.disabled}
				required={this.props.required}
				fieldNote={this.props.fieldNote}
				title={this.props.title}
			>
				<Select
					value={this.state.value}
					changeAction={this.handleChange}
					disabled={this.props.disabled}
				/>
			</Field>
		);
	}
}

SelectField.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	handleChange: PropTypes.func,
	fieldNote: PropTypes.string
};

SelectField.defaultProps = {
	id: "select-field-1",
	label: "Label",
	fieldNote: "This is a fieldnote"
};
