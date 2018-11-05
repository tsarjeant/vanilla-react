import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { Hr } from './Hr';

let stories = storiesOf('Atoms/Text/Hr', module);

stories.add('Default', () =>
    <Hr />
);