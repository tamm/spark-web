import { createContext, useContext } from 'react';

import type { HeadingData } from '../../utils/generate-toc';

const TocContext = createContext<HeadingData[] | undefined>(undefined);

export const TocContextProvider = TocContext.Provider;

export const useTocContext = (): { headings: HeadingData[] } => {
  const context = useContext(TocContext);
  if (typeof context === 'undefined') {
    throw new Error('useTocContext called from outside of TocContextProvider');
  }
  return { headings: context };
};
