import React, { Component } from "react";
import PropTypes from "prop-types";

export class Select extends Component {
	render() {
		return (
			<select
				className="c-select"
				id={this.props.id}
				multiple={this.props.multiple}
				disabled={this.props.disabled}
				onChange={this.props.changeAction}
				value={this.props.value}
			>
				{this.props.listItems.map(function(listItem, index) {
					return listItem.optGroupLabel ? (
						<optgroup
							key={`option-${index}`}
							label={listItem.optGroupLabel}
						>
							{listItem.optGroupItems.map(function(
								optGroupItem,
								index
							) {
								return (
									<option
										key={`option-group-${index}`}
										value={optGroupItem.value}
									>
										{optGroupItem.option}
									</option>
								);
							})}
						</optgroup>
					) : (
						<option key={`option-${index}`} value={listItem.value}>
							{listItem.option}
						</option>
					);
				})}
			</select>
		);
	}
}

Select.propTypes = {
	listItems: PropTypes.array,
	id: PropTypes.string,
	value: PropTypes.string,
	option: PropTypes.string,
	optGroupLabel: PropTypes.string
};

Select.defaultProps = {
	listItems: [
		{
			value: "value-1",
			option: "Value 1"
		},
		{
			value: "value-2",
			option: "Value 2"
		}
	]
};
