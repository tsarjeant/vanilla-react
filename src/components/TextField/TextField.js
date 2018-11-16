import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field } from "../Field/Field";
import { TextInput } from "../TextInput/TextInput";

export class TextField extends Component {
	
	constructor (props) {
		super(props)

		this.state = {
			email: '',
			valid: true,
			title: "This is a field note."
		}
		this.handleEmailChange = this.handleEmailChange.bind(this)
	}

	validateEmail (email) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email)
	}

	handleEmailChange(e) {
		const email = e.target.value
		const emailValid = this.validateEmail(email)

		this.setState({
			email: e.target.value,
			valid: emailValid
		})
	}
	
	render() {
		
		let fieldClass = ''
	    const { email, valid } = this.state
	    
	    if (this.props.type == "email" && !valid) {
	      fieldClass += ' has-error'
		  this.state.title = "Please enter a valid email address."
	    }
		else {
			this.state.title = "This is a field note."
		}
		
		return (
			<Field
				className={fieldClass}
				id={this.props.id}
				label={this.props.label}
				hasError={this.props.hasError}
				disabled={this.props.disabled}
				required={this.props.required}
				fieldNote={this.state.title}
			>
				<TextInput
					type={this.props.type}
					id={this.props.id}
					name={this.props.name}
					placeholder={this.props.placeholder}
					disabled={this.props.disabled}
					readOnly={this.props.readOnly}
					required={this.props.required}
					aria-describedby={this.props.ariaDescribedBy}
					action={this.handleEmailChange}
				/>
			</Field>
		);
	}
}

TextField.propTypes = {
	id: PropTypes.string,
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
	name: PropTypes.string,
	label: PropTypes.string,
	fieldNote: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	ariaDescribedBy: PropTypes.string,
	hasError: PropTypes.bool
};

TextField.defaultProps = {
	id: "text-field-1",
	label: "Label",
	fieldNote: "This is a fieldnote.",
	ariaDescribedBy: "text-field"
};
