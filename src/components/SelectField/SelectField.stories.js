import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { SelectField } from './SelectField';

let stories = storiesOf('Molecules/Forms/SelectField', module);

stories.addDecorator(withInfo).addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
    <SelectField />
);

stories.add('Required', () =>
    <SelectField
        required
        fieldNote="Required select field."
     />
);

stories.add('Disabled', () =>
    <SelectField
        disabled
        fieldNote="Select field with disabled state."
     />
);

stories.add('Error', () =>
    <SelectField
        hasError
        fieldNote="Select field with error state."
     />
);

stories.add('Multiple', () =>
    <SelectField
        multiple
        fieldNote="Select field with multiple selection enabled"
     />
);