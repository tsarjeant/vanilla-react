import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Radio extends Component {

    render() {   
                     
        return (
            <input name="radio" type="radio" class="radio" checked="checked" />
        );
    }
}