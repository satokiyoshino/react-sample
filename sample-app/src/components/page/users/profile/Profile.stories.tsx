import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import { Profile } from './Profile';

export default {
  title: 'SampleApp/components/page/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
  <RecoilRoot>
    <Profile {...args} />
  </RecoilRoot>
);

export const Primary = Template.bind({});
Primary.args = {};
