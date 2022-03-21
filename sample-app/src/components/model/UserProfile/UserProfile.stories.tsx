import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import { UserProfile } from './UserProfile';

export default {
  title: 'SampleApp/components/model/UserProfile',
  component: UserProfile,
} as ComponentMeta<typeof UserProfile>;

const Template: ComponentStory<typeof UserProfile> = (args) => (
  <RecoilRoot>
    <UserProfile {...args} />
  </RecoilRoot>
);

export const Primary = Template.bind({});
Primary.args = {};
