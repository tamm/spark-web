import { SparkProvider } from '@spark-web/core';
import { UniversalNextLink } from '@spark-web/next-utils';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SparkProvider linkComponent={UniversalNextLink}>
      <Component {...pageProps} />
    </SparkProvider>
  );
}

export default MyApp;
