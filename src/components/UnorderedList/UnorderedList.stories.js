import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { UnorderedList } from './UnorderedList';

let stories = storiesOf('Atoms/Lists/UnorderedList', module);

stories.add('Default', () =>
    <UnorderedList />
);