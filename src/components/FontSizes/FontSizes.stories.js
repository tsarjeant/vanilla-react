import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { FontSizes } from './FontSizes';

let stories = storiesOf('Atoms/Global/FontSizes', module);

stories.add('Default', () =>
    <FontSizes />
);