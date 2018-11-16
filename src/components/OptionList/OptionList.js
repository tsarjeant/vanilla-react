import React, { Component } from "react";
import PropTypes from 'prop-types';

export class OptionList extends Component {

    render() {
        return (
            <ul className="c-option-list">

            {this.props.listItems.map(function(listItem){
                return (
                    <li className="c-option-list__item">

                        <label className="c-input-group" for={listItem.id}>
                            <input id={listItem.id} type={listItem.type} name={listItem.name} value={ listItem.value } className="c-input-group__control"  checked={listItem.checked} disabled={listItem.disabled} readonly={listItem.readonly} />
                            <span className="c-input-group__text">{ listItem.text }</span>
                        </label>

                    </li>
                )
            })}

            </ul>
        )
    }
};

OptionList.defaultProps = {
    listItems: [
        {
          "id": "radio-1",
          "name": "radioexample",
          "text": "Radio 1",
          "type": "radio"
        },
        {
          "id": "radio-2",
          "name": "radioexample",
          "text": "Radio 2",
          "type": "radio"
        },
        {
          "id": "radio-3",
          "name": "radioexample",
          "text": "Radio 3",
          "type": "radio"
        }
    ]
}
