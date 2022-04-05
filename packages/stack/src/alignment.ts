import { createResponsiveMapFn } from '@spark-web/theme';

const alignLookup = {
  left: 'start',
  center: 'center',
  right: 'end',
  stretch: 'stretch',
} as const;

export type Align = keyof typeof alignLookup;

export const alignToAlignItems = createResponsiveMapFn(alignLookup);
