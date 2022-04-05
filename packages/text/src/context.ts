import { createContext, useContext } from 'react';

import { useDefaultTextProps } from './defaultTextProps';

type TextContextType = ReturnType<typeof useDefaultTextProps>;

export const TextContext = createContext<TextContextType | undefined>(
  undefined
);

export function useTextContext() {
  return useContext(TextContext);
}
