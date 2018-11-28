import React, { Component } from "react";
import { Headings } from "./Headings";
import { Blockquote } from "./Blockquote";
import { Hr } from "./Hr";
import { InlineElements } from "./InlineElements";

export class AtomsText extends Component {
	render() {
		return (
			<div style={{ padding: "2rem" }}>
				<Headings style={{ marginBottom: "2rem" }} />
				<InlineElements style={{ marginBottom: "2rem" }} />
				<Blockquote style={{ marginBottom: "2rem" }} />
				<Hr />
			</div>
		);
	}
}
