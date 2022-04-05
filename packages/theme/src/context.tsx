import { createContext, useContext } from 'react';

import type { BrighteTheme } from './makeTheme';
import { makeBrighteTheme } from './makeTheme';
import { defaultTokens } from './tokens';

export const defaultTheme = makeBrighteTheme(defaultTokens);

export const ThemeContext = createContext<BrighteTheme>(defaultTheme);
export const ThemeProvider = ThemeContext.Provider;

export const useTheme = (): BrighteTheme => useContext(ThemeContext);
