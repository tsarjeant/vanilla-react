import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { CheckboxField } from './CheckboxField';

let stories = storiesOf('Molecules/Forms/CheckboxField', module);

stories.addDecorator(withInfo).addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <CheckboxField />
);

stories.add('Required', () =>
    <CheckboxField
        required
        fieldNote="Required checkbox field."
     />
);

stories.add('Disabled', () =>
    <CheckboxField
        fieldNote="Checkbox field with disabled state."
        disabled
        listItems= {[
            {
                "id": "checkbox-1",
                "name": "checkboxexample",
                "text": "Checkbox 1",
                "type": "checkbox",
                "disabled": true
            },
            {
                "id": "checkbox-2",
                "name": "checkboxexample",
                "text": "Checkbox 2",
                "type": "checkbox",
                "disabled": true
            },
            {
                "id": "checkbox-3",
                "name": "checkboxexample",
                "text": "Checkbox 3",
                "type": "checkbox",
                "disabled": true
            },
            {
                "id": "checkbox-4",
                "name": "checkboxexample",
                "text": "Checkbox 4",
                "type": "checkbox",
                "disabled": true
            }
        ]}
     />
);

stories.add('Error', () =>
    <CheckboxField
        hasError
        fieldNote="Checkbox field with error state."
        listItems= {[
            {
                "id": "checkbox-1",
                "name": "checkboxexample",
                "text": "Checkbox 1",
                "type": "checkbox"
            },
            {
                "id": "checkbox-2",
                "name": "checkboxexample",
                "text": "Checkbox 2",
                "type": "checkbox",
                "checked": true
            },
            {
                "id": "checkbox-3",
                "name": "checkboxexample",
                "text": "Checkbox 3",
                "type": "checkbox"
            },
            {
                "id": "checkbox-4",
                "name": "checkboxexample",
                "text": "Checkbox 4",
                "type": "checkbox"
            }
        ]}
     />
);
