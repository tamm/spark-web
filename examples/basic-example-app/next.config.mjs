import withPreconstruct from '@preconstruct/next';

/*
 *
 * We have imported preConstruct in the next.config.mjs
 * because we are in the mono-repo, you do not need to do this
 * when consuming the library externally. :)
 *
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withPreconstruct(nextConfig);
