import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { FontFamilies } from './FontFamilies';

let stories = storiesOf('Atoms/Global/FontFamilies', module);

stories.add('Default', () =>
    <FontFamilies />
);