/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import InputPreview from '../../app/components/InputPreview';

let stories = storiesOf('Input Preview', module)
    .addDecorator(withKnobs);

stories.add('Input Preview', () => (
    <InputPreview />
));