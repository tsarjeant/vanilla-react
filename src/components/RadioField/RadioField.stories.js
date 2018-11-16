import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { RadioField } from './RadioField';

let stories = storiesOf('Molecules/Forms/RadioField', module);

stories.addDecorator(withInfo).addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <RadioField />
);

stories.add('Required', () =>
    <RadioField
        required
        fieldNote="Required radio field."
     />
);

stories.add('Disabled', () =>
    <RadioField
        fieldNote="Radio field with disabled state."
        disabled
        listItems= {[
            {
                "id": "radio-1",
                "name": "radioexample",
                "text": "Radio 1",
                "type": "radio",
                "disabled": true
            },
            {
                "id": "radio-2",
                "name": "radioexample",
                "text": "Radio 2",
                "type": "radio",
                "disabled": true
            },
            {
                "id": "radio-3",
                "name": "radioexample",
                "text": "Radio 3",
                "type": "radio",
                "disabled": true
            },
            {
                "id": "radio-4",
                "name": "radioexample",
                "text": "Radio 4",
                "type": "radio",
                "disabled": true
            }
        ]}
     />
);

stories.add('Error', () =>
    <RadioField
        hasError
        fieldNote="Radio field with error state."
        listItems= {[
            {
                "id": "radio-1",
                "name": "radioexample",
                "text": "Radio 1",
                "type": "radio"
            },
            {
                "id": "radio-2",
                "name": "radioexample",
                "text": "Radio 2",
                "type": "radio",
                "checked": true
            },
            {
                "id": "radio-3",
                "name": "radioexample",
                "text": "Radio 3",
                "type": "radio"
            },
            {
                "id": "radio-4",
                "name": "radioexample",
                "text": "Radio 4",
                "type": "radio"
            }
        ]}
     />
);