import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { Textarea } from './Textarea';

let stories = storiesOf('Atoms/Forms/Textarea', module);

stories.addDecorator(withInfo).addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
    <Textarea />
);
stories.add('Disabled', () =>
    <Textarea
        disabled
     />
);
stories.add('Read Only', () =>
    <Textarea
        readOnly
     />
);
stories.add('Required', () =>
    <Textarea
        required
     />
);