import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { FontSizes } from './FontSizes';

let stories = storiesOf('Atoms/Global/FontSizes', module);

stories.add('Default', () =>
    <FontSizes />
);