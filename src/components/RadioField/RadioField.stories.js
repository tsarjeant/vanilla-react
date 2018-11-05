import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioField } from './RadioField';

let stories = storiesOf('Molecules/Forms/RadioField', module);

stories.add('Default', () =>
  <RadioField />
);
