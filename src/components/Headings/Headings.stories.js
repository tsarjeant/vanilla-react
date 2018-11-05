import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Headings} from './Headings';

let stories = storiesOf('Atoms/Text/Headings', module);

stories.add('Default', () =>
    <Headings />
);