import React, { Component } from "react";
import PropTypes from 'prop-types';

export class InlineCheckbox extends Component {

    render() {
        return (
            <label class="c-input-group" for={ this.props.id }>

            	<input id={ this.props.id } type="checkbox" name={ this.props.name } value={ this.props.value } class="c-input-group__control" checked={ this.props.checked } />
            	<span class="c-input-group__text">{ this.props.label }</span>

            </label>
        )
    }
};

InlineCheckbox.defaultProps = {
    id: "inline-checkbox-1",
    name: "inlinecheckbox",
    value: "Value",
    label: "Inline checkbox label"
}
