import { Text } from '@spark-web/text';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import type { TextLinkProps } from './text-link';
import { TextLink } from './text-link';

export default {
  title: 'Navigation / TextLink',
  component: TextLink,
} as ComponentMeta<typeof TextLink>;

const TextLinkStory: ComponentStory<typeof TextLink> = (
  args: TextLinkProps
) => (
  <Text>
    {`Here's some text with a `}
    <TextLink {...args} />
  </Text>
);
export const Default = TextLinkStory.bind({});

Default.args = {
  href: 'https://brighte.com.au',
  children: 'link!',
} as TextLinkProps;
