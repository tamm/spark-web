const withPreconstruct = require('@preconstruct/next');
const generateSidebarNavigations = require('./scripts/generate-sidebar-navigations');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = () => {
  generateSidebarNavigations();
  return withPreconstruct(nextConfig);
};
