import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Logo } from "../Logo/Logo";
import { PrimaryNav } from "../PrimaryNav/PrimaryNav";
import { InlineForm } from "../InlineForm/InlineForm";

export class Header extends Component {
    render() {
        return (
            <header className="c-header" {...this.props}>
                <Logo href="/" />

                <PrimaryNav
                    listItems={[
                        {
                            href: "#",
                            text: "Nav Item 1"
                        },
                        {
                            href: "#",
                            text: "Nav Item "
                        },
                        {
                            href: "#",
                            text: "Nav Item 3"
                        },
                        {
                            href: "#",
                            text: "Nav Item 4"
                        }
                    ]}
                />

                <InlineForm
					method="post"
					action="#"
                    placeholder="Search the site"
                    cta="Search"
                    id="search-form"
                    label="Search the site"
                />
                {this.props.children}
            </header>
        );
    }
}

Header.propTypes = {
    children: PropTypes.node
}