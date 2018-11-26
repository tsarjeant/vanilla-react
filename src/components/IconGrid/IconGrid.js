import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as ShoppingCartIcon } from "../../icons/shopping-cart.svg";
import { ReactComponent as TriangleDownIcon } from "../../icons/triangle-down.svg";
import { ReactComponent as TriangleLeftIcon } from "../../icons/triangle-left.svg";
import { ReactComponent as TriangleRightIcon } from "../../icons/triangle-right.svg";
import { ReactComponent as TriangleUpIcon } from "../../icons/triangle-up.svg";
import "./IconGrid.css";

export class IconGrid extends Component {
	render() {
		return (
			<ul className="icon-grid">
				<li className="icon-grid__item">
					<MinusIcon />
					<span className="icon-grid__text">Minus</span>
				</li>
				<li className="icon-grid__item">
					<PlusIcon />
					<span className="icon-grid__text">Plus</span>
				</li>
				<li className="icon-grid__item">
					<SearchIcon />
					<span className="icon-grid__text">Search</span>
				</li>
				<li className="icon-grid__item">
					<ShoppingCartIcon />
					<span className="icon-grid__text">Shopping Cart</span>
				</li>
				<li className="icon-grid__item">
					<TriangleDownIcon />
					<span className="icon-grid__text">Triangle Down</span>
				</li>
				<li className="icon-grid__item">
					<TriangleLeftIcon />
					<span className="icon-grid__text">Triangle Left</span>
				</li>
				<li className="icon-grid__item">
					<TriangleRightIcon />
					<span className="icon-grid__text">Triangle Right</span>
				</li>
				<li className="icon-grid__item">
					<TriangleUpIcon />
					<span className="icon-grid__text">Triangle Up</span>
				</li>
			</ul>
		);
	}
}

IconGrid.propTypes = {
	iconClass: PropTypes.string
};

IconGrid.defaultProps = {};
