import { AesteticoStylesheet, SparkProvider } from '@spark-web/core';
import React from 'react';

export const decorators = [
  Story => (
    <SparkProvider>
      <AesteticoStylesheet />
      <Story />
    </SparkProvider>
  ),
];
