# Vanilla React

Vanilla React is a chapter.

# React w/ Storybook Starter

This repo is a combination of [Create React App](https://github.com/facebook/create-react-app) and the [Storybook CLI](https://github.com/storybooks/storybook#getting-started).

## Using This Repo

-   `git clone https://github.com/bradfrost/vanilla-react.git && cd vanilla-react`
-   `npm install`
-   `npm run storybook` will start the storybook.

## Building components

Start building in the `src/components` folder with this folder structure

```js
-ComponentName - ComponentName.stories.js - ComponentName.js;
```

Create `src/components/Button` and add `Button.css`, `Button.js` and `Button.stories.js`

**Button.js** will be:

```js
import React, { Component } from "react";
import "./Button.scss";

export class Button extends Component {
	render() {
		return (
			<button className="Button" {...this.props}>
				{" "}
				{this.props.children}{" "}
			</button>
		);
	}
}
```

**Button.stories.js** will be:

```js
import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";

let stories = storiesOf("Button", module);

stories.add("Default", () => (
	<Button onClick={() => console.log("clicked!!")}>Hello Button</Button>
));
```

**Button.css** is plain CSS, but will automatically be loaded when the component is used.

### Run Storybook

```bash
npm run storybook
```
