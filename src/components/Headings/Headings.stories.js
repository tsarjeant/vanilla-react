import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { Headings} from './Headings';

let stories = storiesOf('Atoms/Text/Headings', module);

stories.addDecorator(withInfo).addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
    <Headings />
);