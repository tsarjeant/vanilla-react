import React, { Component } from "react";
import PropTypes from "prop-types";

export class Textarea extends Component {
	render() {
		return (
			<textarea
				className="c-input"
				id={this.props.id}
				name={this.props.name}
				placeholder={this.props.placeholder}
				value={this.props.value}
				rows={this.props.rows}
				disabled={this.props.disabled}
				readOnly={this.props.readOnly}
				required={this.props.required}
				aria-describedby={this.props.ariaDescribedBy}
			/>
		);
	}
}

Textarea.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	rows: PropTypes.number,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	ariaDescribedBy: PropTypes.string
};

Textarea.defaultProps = {
	id: "textarea-1",
	name: "default-textarea",
	placeholder: "Placeholder",
	rows: 5
};
