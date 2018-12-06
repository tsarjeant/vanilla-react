import React, { Component } from "react";
import "../../css/styleguide.css";
import PropTypes from "prop-types";
import brandColors from "../../data/brand-colors.json";
import { Section } from "../Section/Section";
import axios from "axios";
export class Colors extends Component {
    state = {
        colors: []
    };

    componentDidMount() {
        axios
            .get(
                `https://projects.invisionapp.com/dsm-export/brad-frost-web/react-test/style-data.json?exportFormat=list&key=rk-Dxj5HkE`
            )
            .then(res => {
                const colors = res.data.list.colors;
                this.setState({ colors });
            });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.colors.map((color, index) => (
                    <Section title={color.name} key={color.index}>
                        <ul className="sg-colors">
                            {color.colors.map((colorItem, index) => (
                                <li key={`color-${index}`}>
                                    <span
                                        className="sg-swatch"
                                        style={{
                                            backgroundColor: colorItem.value
                                        }}
                                    />
                                    <span className="sg-label">
                                        {colorItem.value}
                                        <br /> {colorItem.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Section>
                ))}
            </React.Fragment>
        );
    }
}

Colors.propTypes = {
    listItems: PropTypes.array,
    value: PropTypes.string,
    name: PropTypes.string,
    comment: PropTypes.string
};

Colors.defaultProps = {
    listItems: brandColors.items
};
