import React, { Component } from "react";
import PropTypes from 'prop-types';

export class RadioField extends Component {

    render() {
        return (
            <div className={"c-field " + this.props.styleModifier }>

                <h4 className="c-field__label">{ this.props.heading}</h4>

                <div className="c-field__body">

                    <ul className="c-option-list">

                    {this.props.listItems.map(function(listItem){
                        return (
                            <li className="c-option-list__item">

                                <label className="c-input-group" for={listItem.id}>
                                    <input id={listItem.id} type="radio" name={listItem.name} value={ listItem.value } className="c-input-group__control"  checked={listItem.checked} disabled={listItem.disabled} readonly={listItem.readonly} />
                                    <span className="c-input-group__text">{ listItem.text }</span>
                                </label>

                            </li>
                        )
                    })}

                    </ul>

                </div>

                {this.props.fieldNote &&
                    <div className="c-field__note">{this.props.fieldNote}</div>
                }

            </div>
        )
    }
};

RadioField.defaultProps = {
    listItems: [
        {
          "id": "radio-1",
          "name": "radioexample",
          "text": "Radio 1"
        },
        {
          "id": "radio-2",
          "name": "radioexample",
          "text": "Radio 2"
        },
        {
          "id": "radio-3",
          "name": "radioexample",
          "text": "Radio 3"
        }
    ]
}
