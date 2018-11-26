import React, { Component } from "react";
import PropTypes from "prop-types";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

export class Icon extends Component {
	render() {
		return <React.Fragment>{this.props.children}</React.Fragment>;
	}
}

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	iconClass: PropTypes.string
};

Icon.defaultProps = {
	iconClass: "c-icon",
	icon: "search",
	children: <SearchIcon />
};
