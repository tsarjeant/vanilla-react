import React, { Component } from "react";

export class TextField extends Component {

    render() {
        return (
            <div className="c-field">
                <label htmlFor={this.props.name} className="c-field__label ">{this.props.label}{(this.props.required) ? "*" : null}</label>
                <div className="c-field__body">
                    <input type={this.props.type} id={this.props.name} className="c-input " name={this.props.name} required={this.props.required} placeholder={this.props.placeholder } title={this.props.title} />
                </div>
                {this.props.fieldNote &&
                    <div className="c-field__note">{this.props.fieldNote}</div>
                }
            </div>
        )
    }
};
