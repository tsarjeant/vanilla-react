import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { Hero } from './Hero';
import heroImg from '../../images/fpo-1200x650.png';

let stories = storiesOf('Molecules/Blocks/Hero', module);

stories.addDecorator(withInfo).addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <Hero heroimgsrc={ heroImg } heroimgalt="Alt Text" title="Hero Title" description="This is the hero description">
    Hello Hero
  </Hero>
);
