import React, { Component } from "react";
import PropTypes from "prop-types";

export class Checkbox extends Component {
	render() {
		return <input name="checkbox" type="checkbox" checked="checked" />;
	}
}
