import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Icon.scss";

export class Icon extends Component {
	render() {
		return (
			<svg className={`c-icon ${this.props.iconClass}`}>
				<use xlinkHref={`./icons.svg#${this.props.iconname}`} />
			</svg>
		);
	}
}

Icon.propTypes = {
	iconClass: PropTypes.string,
	iconname: PropTypes.string.isRequired
};

Icon.defaultProps = {
	iconClass: "c-icon",
	iconname: "search"
};
