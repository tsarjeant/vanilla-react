import React, { Component } from "react";
import PropTypes from "prop-types";
import { Select } from "../Select/Select";

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
			<div className="c-field">
				<label htmlFor={this.props.id} className="c-field__label">
					{this.props.label}
				</label>
				<div className="c-field__body">
					<Select
						value={this.state.value}
						changeAction={this.handleChange}
					/>
				</div>
				{this.props.fieldNote && (
					<div className="c-field__note">{this.props.fieldNote}</div>
				)}
			</div>
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
