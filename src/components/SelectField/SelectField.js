import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Select } from '../Select/Select';

export class SelectField extends Component {

    render() {   
                     
        return (
            <div className="c-field">
                <label for={ this.props.id } class="c-field__label">{ this.props.label }</label>
                <div className="c-field__body">
                    <Select />
                </div>
                {this.props.fieldNote &&
                    <div className="c-field__note">{this.props.fieldNote}</div>
                }
            </div>

        );
    }
}

SelectField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    fieldNote: PropTypes.string    
}

SelectField.defaultProps = {
    id: "select-field-1",
    label: "Label",
    fieldNote: "This is a fieldnote"
    
};