import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import { SelectUserForm } from './SelectUserForm';

export default {
  title: 'SampleApp/components/model/SelectUserForm',
  component: SelectUserForm,
} as ComponentMeta<typeof SelectUserForm>;

const Template: ComponentStory<typeof SelectUserForm> = (args) => (
  <RecoilRoot>
    <SelectUserForm {...args} />
  </RecoilRoot>
);

export const Primary = Template.bind({});
Primary.args = {};
