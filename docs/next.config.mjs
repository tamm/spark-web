import withPreconstruct from '@preconstruct/next';
import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => ({
    ...config,
    infrastructureLogging: {
      level: 'error',
    },
  }),
};

export default withPreconstruct(withContentlayer(nextConfig));
