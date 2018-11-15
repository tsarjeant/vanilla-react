import React, { Component } from "react";
import PropTypes from "prop-types";

export class TextInput extends Component {
	render() {
		return (
			<input
				className="c-input"
				id={this.props.id}
				name={this.props.name}
				type={this.props.type}
				value={this.props.value}
				placeholder={this.props.placeholder}
				disabled={this.props.disabled}
				readOnly={this.props.readOnly}
				required={this.props.required}
				aria-describedby={this.props.ariaDescribedBy}
			/>
		);
	}
}

TextInput.propTypes = {
	name: PropTypes.string,
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
	value: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	ariaDescribedBy: PropTypes.string
};

TextInput.defaultProps = {
	disabled:false,
	placeholder: "Placeholder",
	type: "text"
};
