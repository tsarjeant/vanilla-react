import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Field } from '../Field/Field';
import { OptionList } from '../OptionList/OptionList';

export class CheckboxField extends Component {

    render() {
        const fieldClass = '';
        
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
                <OptionList
                    listItems={this.props.listItems}
                 />
            </Field>
        )
    }
};

CheckboxField.defaultProps = {
    listItems: [
        {
          "id": "checkbox-1",
          "name": "checkbox-example",
          "text": "Checkbox 1",
          "type": "checkbox"
        },
        {
          "id": "checkbox-2",
          "name": "checkbox-example",
          "text": "Checkbox 2",
          "type": "checkbox"
        },
        {
          "id": "checkbox-3",
          "name": "checkbox-example",
          "text": "Checkbox 3",
          "type": "checkbox"
        }
    ]
}
