import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Label } from "../Label/Label";

export class Field extends Component {
	render() {
		const fieldClass = classnames("c-field", this.props.className, {
			"has-error": this.props.hasError,
			"is-disabled": this.props.disabled
		});
		return (
			<div className={fieldClass}>
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
	fieldClass: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	required: PropTypes.bool,
	children: PropTypes.node,
	ariaDescribedBy: PropTypes.string,
	fieldNote: PropTypes.string
};

Field.defaultProps = {
	id: "textarea-field-1",
	label: "Label",
	fieldNote: "This is a fieldnote."
};
