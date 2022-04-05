import { defaultTokens, makeBrighteTheme } from '@spark-web/theme';

export const docsTheme = makeBrighteTheme({
  ...defaultTokens,
  color: {
    ...defaultTokens.color,
    background: {
      ...defaultTokens.color.background,
      body: 'white',
    },
  },
});
