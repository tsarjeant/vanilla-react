import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Textarea } from '../Textarea/Textarea'

export class TextareaField extends Component {

    render() {                
        return (
            <div className="c-field">
                <label for={ this.props.id } class="c-field__label">{ this.props.label }</label>
                <div className="c-field__body">
                    <Textarea />
                </div>
                {this.props.fieldNote &&
                    <div className="c-field__note">{this.props.fieldNote}</div>
                }
            </div>
        );
    }
}

TextareaField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    fieldNote: PropTypes.string
}

TextareaField.defaultProps = {
    id: "textarea-field-1",
    label: "Label",
    fieldNote: "This is a fieldnote."
};