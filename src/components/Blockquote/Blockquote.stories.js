import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { Blockquote } from './Blockquote';

let stories = storiesOf('Atoms/Text/Blockquote', module);

stories.add('Default', () =>
    <Blockquote />
);