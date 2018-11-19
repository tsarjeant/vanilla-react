import React, { Component } from "react";
import PropTypes from "prop-types";

export class OptionList extends Component {
	onItemChange(e) {
		console.log("I've been changed!");
	}

	render() {
		return (
			<ul>
				{this.props.listItems.map((listItem, index) => {
					let boundItemChange = this.onItemChange.bind(
						this,
						listItem
					);
					return (
						<li
							className="c-option-list__item"
							key={`option-list-item-${index}`}
						>
							<label
								className="c-input-group"
								htmlFor={listItem.id}
							>
								<input
									id={listItem.id}
									type={listItem.type}
									name={listItem.name}
									value={listItem.value}
									className="c-input-group__control"
									checked={listItem.checked}
									disabled={listItem.disabled}
									readOnly={listItem.readonly}
									onChange={boundItemChange}
								/>
								<span className="c-input-group__text">
									{listItem.text}
								</span>
							</label>
						</li>
					);
				})}
			</ul>
		);
	}
}

OptionList.propTypes = {
	listItems: PropTypes.array,
	id: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	text: PropTypes.string
};

OptionList.defaultProps = {
	listItems: [
		{
			id: "radio-1",
			name: "radioexample",
			text: "Radio 1",
			type: "radio"
		},
		{
			id: "radio-2",
			name: "radioexample",
			text: "Radio 2",
			type: "radio"
		},
		{
			id: "radio-3",
			name: "radioexample",
			text: "Radio 3",
			type: "radio"
		}
	]
};
