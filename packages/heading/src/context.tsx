import { createContext, useContext } from 'react';

export const HeadingContext = createContext(false);

export function useHeadingContext() {
  return useContext(HeadingContext);
}
