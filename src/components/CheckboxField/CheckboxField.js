import React, { Component } from "react";
import PropTypes from 'prop-types';

export class CheckboxField extends Component {

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
                                    <input id={listItem.id} type="checkbox" name={listItem.name} value={ listItem.value } className="c-input-group__control"  checked={listItem.checked} disabled={listItem.disabled} readonly={listItem.readonly} />
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

CheckboxField.defaultProps = {
    listItems: [
        {
          "id": "checkbox-1",
          "name": "checkbox-example",
          "text": "Checkbox 1"
        },
        {
          "id": "checkbox-2",
          "name": "checkbox-example",
          "text": "Checkbox 2"
        },
        {
          "id": "checkbox-3",
          "name": "checkbox-example",
          "text": "Checkbox 3"
        }
    ]
}
