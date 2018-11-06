import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { TextareaField } from './TextareaField';

let stories = storiesOf('Molecules/Forms/TextareaField', module);

stories.add('Default', () =>
    <TextareaField />
);