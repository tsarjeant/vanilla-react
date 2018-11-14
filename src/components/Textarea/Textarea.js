import React, { Component } from "react";
import PropTypes from "prop-types";

export class Textarea extends Component {
	render() {
		return (
			<textarea
				id={this.props.id}
				name={this.props.name}
				placeholder={this.props.placeholder}
			/>
		);
	}
}

Textarea.propTypes = {
	placeholder: PropTypes.string
};

Textarea.defaultProps = {
	placeholder: "Placeholder"
};
