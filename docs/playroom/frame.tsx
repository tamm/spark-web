import { SparkProvider } from '@spark-web/core';
import * as React from 'react';

export default function FrameComponent({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <SparkProvider>{children}</SparkProvider>;
}
