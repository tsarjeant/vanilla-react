import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { Headings} from './Headings';

let stories = storiesOf('Atoms/Text/Headings', module);

stories.add('Default', () =>
    <Headings />
);