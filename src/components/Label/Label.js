import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Label extends Component {

    render() {

        return (
            <label
                className={`c-field__label ${this.props.className}`}
                htmlFor={this.props.htmlFor}
            >
                {this.props.labelText}
                {this.props.required && (
					<abbr className="c-field__required" title="required">
						*
					</abbr>
				)}
            </label>
        );
    }
}

Label.propTypes = {
    className: PropTypes.string,
    htmlFor: PropTypes.string,
    labelText: PropTypes.string,
    required: PropTypes.bool
}

Label.defaultProps = {
    labelText: 'Label'
}