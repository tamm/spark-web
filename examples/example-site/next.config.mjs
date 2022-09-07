/**
 * You shouldn't need the Preconstruct HOC outside of the Spark Web monorepo.
 * If you're not using Preconstruct to build packages locally you can remove it
 * from this file and uninstall it from your app.
 *
 * @example yarn remove @preconstruct/next
 */
import withPreconstruct from '@preconstruct/next';

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return withPreconstruct(config);
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
});
