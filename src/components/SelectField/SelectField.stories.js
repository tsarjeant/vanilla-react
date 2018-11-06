import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import { SelectField } from './SelectField';

let stories = storiesOf('Molecules/Forms/SelectField', module);

stories.add('Default', () =>
    <SelectField
        listItems={[
            {
                "value": "value-1",
                "option": "Value 1"
            },
            {
                "value": "value-2",
                "option": "Value 2"
            },
            {
                "optGroupLabel": "Group 1",
                "optGroupItems": [
                    {
                        "value": "value-3",
                        "option": "Value 3"
                    },
                    {
                        "value": "value-4",
                        "option": "Value 4"
                    },
                    {
                        "value": "value-5",
                        "option": "Value 5"
                    }
                ]
            }
        ]}
     />
);