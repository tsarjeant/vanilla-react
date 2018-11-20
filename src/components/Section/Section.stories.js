import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { Section } from './Section';

let stories = storiesOf('Organisms/Sections/Section', module);

stories.addDecorator(withInfo).addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <Section title="Section Title" description="This is a description of what the section is">
    This is the section body, where you can put any content or include other components.
  </Section>
);
