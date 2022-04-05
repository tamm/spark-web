import { SparkProvider } from '@spark-web/core';
import { docsTheme } from '../utils/docs-theme';

export const decorators = [
  Story => (
    <SparkProvider theme={docsTheme}>
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    </SparkProvider>
  ),
];
