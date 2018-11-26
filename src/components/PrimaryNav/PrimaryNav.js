import React, { Component } from "react";
import PropTypes from "prop-types";

export class PrimaryNav extends Component {
	render() {
		return (
			<nav className="c-primary-nav { this.props.styleModifier }">
				<ul className="c-primary-nav__list">
					{this.props.navItems.map(function(navItem, index) {
						return (
							<li
								className="c-primary-nav__item"
								key={`c-primary-nav__item-${index}`}
							>
								<a
									href={navItem.href}
									onClick={navItem.onClick}
								>
									{navItem.text}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

PrimaryNav.propTypes = {
	navItems: PropTypes.array.isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func,
	text: PropTypes.string
};

PrimaryNav.defaultProps = {
	navItems: [
		{
			href: "#",
			text: "Nav Item"
		},
		{
			href: "#",
			text: "Nav Item"
		},
		{
			href: "#",
			text: "Nav Item"
		}
	]
};
