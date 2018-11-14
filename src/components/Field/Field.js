import React, { Component } from "react";
import PropTypes from "prop-types";
import { Label } from "../Label/Label";

export class Field extends Component {
	render() {
		return (
			<div className="c-field">
				<Label
					htmlFor={this.props.id}
					labelText={this.props.label}
					required={this.props.required}
				/>
				<div className="c-field__body">{this.props.children}</div>
				{this.props.fieldNote && (
					<div
						className="c-field__note"
						id={this.props.ariaDescribedBy}
					>
						{this.props.fieldNote}
					</div>
				)}
			</div>
		);
	}
}

Field.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	fieldNote: PropTypes.string
};

Field.defaultProps = {
	id: "textarea-field-1",
	label: "Fart",
	fieldNote: "This is a fieldnote."
};
