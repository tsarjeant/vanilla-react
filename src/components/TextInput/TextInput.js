import React, { Component } from "react";
import PropTypes from 'prop-types';

export class TextInput extends Component {

    render() {                
        return (
            <input type="text" placeholder={ this.props.placeholder } />
        );
    }
}

TextInput.propTypes = {
    placeholder: PropTypes.string
}

TextInput.defaultProps = {
    placeholder: "Placeholder"
};