import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './Checkbox';

let stories = storiesOf('Atoms/Forms/Checkbox', module);

stories.add('Default', () =>
    <Checkbox />
);