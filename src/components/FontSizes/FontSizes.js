import React, { Component } from "react";
import PropTypes from 'prop-types';

export class FontSizes extends Component {

    render() {                
        return (
            <ul>
                {this.props.listItems.map(function(listItem){
                   return (
                       <li key={ listItem.value } style={{fontSize: listItem.value}}>{ listItem.name }: { listItem.value }</li>
                   )
                 })}
            </ul>
        );
    }
}

FontSizes.defaultProps = {
    listItems: [
        {
            "name": "$font-size-sm",
            "value": "0.75rem",
            "comment": ""
        },
        {
            "name": "$font-size-sm-2",
            "value": "0.85rem",
            "comment": ""
        },
        {
            "name": "$font-size-med",
            "value": "1rem",
            "comment": ""
        },
        {
            "name": "$font-size-med-2",
            "value": "1.2rem",
            "comment": ""
        },
        {
            "name": "$font-size-large",
            "value": "2rem",
            "comment": ""
        },
        {
            "name": "$font-size-xl",
            "value": "3rem",
            "comment": ""
        }
    ]
}

