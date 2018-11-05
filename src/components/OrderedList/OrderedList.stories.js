import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { OrderedList } from './OrderedList';

let stories = storiesOf('Atoms/Lists/OrderedList', module);

stories.add('Default', () =>
    <OrderedList />
);