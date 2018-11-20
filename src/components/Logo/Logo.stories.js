import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { Logo } from './Logo';

import logoimg from '../../images/fpo-120x60.png';

let stories = storiesOf('Molecules/Global/Logo', module);

stories.addDecorator(withInfo).addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <Logo href="http://bradfrost.com" src={ logoimg } alt="Company Name" />
);