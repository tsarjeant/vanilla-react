import React, { Component } from "react";
import '../../css/styleguide.css';
import PropTypes from 'prop-types';

export class Colors extends Component {

    render() {                
        return (
            <ul className="sg-colors">
                {this.props.listItems.map(function(listItem){
                   return (
                       <li key={ listItem.value }>
                           <span className="sg-swatch" style={{backgroundColor: listItem.value}}></span>
                           <span className="sg-label">
                               { listItem.name }
                               <br /> { listItem.value }
                               <br /> { listItem.comment }
                           </span>
                       </li>
                   )
                 })}
            </ul>
        );
    }
}

Colors.defaultProps = {
    listItems: [
        {
          "name": "$color-brand-blue",
          "value": "#0000ff",
          "comment": ""
        }
    ]
}

