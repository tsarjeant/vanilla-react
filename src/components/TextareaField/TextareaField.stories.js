import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextareaField } from './TextareaField';

let stories = storiesOf('Molecules/Forms/TextareaField', module);

stories.add('Default', () =>
    <TextareaField label="LLLLLLLABEL" fieldNote="This is a field note" />
);