import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { Paragraph } from './Paragraph';

let stories = storiesOf('Atoms/Text/Paragraph', module);

stories.add('Default', () =>
    <Paragraph />
);