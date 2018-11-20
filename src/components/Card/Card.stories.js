import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { Card } from './Card';

let stories = storiesOf('Molecules/Blocks/Card', module);

stories.addDecorator(withInfo).addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <Card>
    This is the card body.
  </Card>
);

stories.add('Dark', () =>
  <Card theme="dark" title="Dark Card Title" description="This is the card description">
    This is the card body.
  </Card>
);
