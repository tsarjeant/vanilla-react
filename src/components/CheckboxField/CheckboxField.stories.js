import React from 'react';
import { storiesOf } from '@storybook/react';
import { CheckboxField } from './CheckboxField';

let stories = storiesOf('Molecules/Forms/CheckboxField', module);

stories.add('Default', () =>
  <CheckboxField />
);
