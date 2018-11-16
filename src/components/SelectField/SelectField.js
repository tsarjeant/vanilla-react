import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Select } from '../Select/Select';
import { Field } from '../Field/Field';

export class SelectField extends Component {

    render() {   
        const fieldClass = "c-field"             
        return (
            <Field
				className={fieldClass}
				id={this.props.id}
				label={this.props.label}
				hasError={this.props.hasError}
				disabled={this.props.disabled}
				required={this.props.required}
				fieldNote={ this.props.fieldNote }
				title={ this.props.title }
			>
                <Select
                    listItems={this.props.listItems}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    multiple={this.props.multiple}
                 />
            </Field>

        );
    }
}

SelectField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    fieldNote: PropTypes.string,
    title: PropTypes.string,
    listItems: PropTypes.array,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool, 
    hasError: PropTypes.bool   
}

SelectField.defaultProps = {
    id: "select-field-1",
    label: "Label",
    fieldNote: "This is a fieldnote",
    listItems: [
        {
            "value": "value-1",
            "option": "Value 1"
        },
        {
            "value": "value-2",
            "option": "Value 2"
        },
        {
            "optGroupLabel": "Group 1",
            "optGroupItems": [
                {
                    "value": "value-3",
                    "option": "Value 3"
                },
                {
                    "value": "value-4",
                    "option": "Value 4"
                },
                {
                    "value": "value-5",
                    "option": "Value 5"
                }
            ]
        }
    ]
    
};