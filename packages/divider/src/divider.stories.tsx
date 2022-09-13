import type { ComponentMeta, ComponentStory } from '@storybook/react';

import type { DividerProps } from './divider';
import { Divider } from './divider';

export default {
  title: 'Page & Layout / Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const DividerStory: ComponentStory<typeof Divider> = (args: DividerProps) => (
  <Divider {...args} />
);
export const Default = DividerStory.bind({});

Default.args = {
  width: 'standard',
} as DividerProps;
