import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { TextInput } from './TextInput';

let stories = storiesOf('Atoms/Forms/TextInput', module);

stories.addDecorator(withInfo).addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
    <TextInput />
);

stories.add('Disabled', () =>
    <TextInput
        disabled
     />
);
stories.add('Read Only', () =>
    <TextInput
        readOnly
     />
);
stories.add('Required', () =>
    <TextInput
        required
     />
);