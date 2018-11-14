import React, { Component } from "react";
import PropTypes from "prop-types";

export class TextInput extends Component {
	render() {
		return (
			<input
				id={this.props.id}
				name={this.props.name}
				type={this.props.type}
				placeholder={this.props.placeholder}
				aria-describedby={this.props.ariaDescribedBy}
			/>
		);
	}
}

TextInput.propTypes = {
	placeholder: PropTypes.string,
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
	])
};

TextInput.defaultProps = {
	type: "text"
};
