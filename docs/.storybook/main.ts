import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  stories: ['../../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  features: {
    // Allows code-splitting for faster load times
    storyStoreV7: true,
  },
};

export default config;
