import type { BoxProps } from '@spark-web/box';
import type { ForegroundTone } from '@spark-web/text';
import type { BrighteTheme } from '@spark-web/theme';

import type { ButtonProminence, ButtonTone } from './types';

type BaseButtonStyles = {
  background: BoxProps['background'];
  border?: BoxProps['border'];
  borderWidth?: BoxProps['borderWidth'];
  textTone?: ForegroundTone;
};

type HoverButtonStyles = {
  backgroundHover: keyof BrighteTheme['backgroundInteractions'];
  borderHover?: keyof BrighteTheme['border']['color'];
  textToneHover?: keyof BrighteTheme['color']['foreground'];
};

type ActiveButtonStyles = {
  backgroundActive: keyof BrighteTheme['backgroundInteractions'];
  borderActive?: keyof BrighteTheme['border']['color'];
  textToneActive?: keyof BrighteTheme['color']['foreground'];
};

type DisabledButtonStyles = {
  backgroundDisabled: keyof BrighteTheme['color']['background'];
  borderDisabled?: keyof BrighteTheme['border']['color'];
  textToneDisabled: keyof BrighteTheme['color']['foreground'];
};

type ButtonStyles = BaseButtonStyles &
  HoverButtonStyles &
  ActiveButtonStyles &
  DisabledButtonStyles;

const highDisabledStyles: DisabledButtonStyles = {
  backgroundDisabled: 'disabled',
  borderDisabled: 'fieldDisabled',
  textToneDisabled: 'neutralInverted',
};

const highDisabledAltStyles: DisabledButtonStyles = {
  backgroundDisabled: 'neutral',
  borderDisabled: 'standard',
  textToneDisabled: 'placeholder',
};

const lowDisabledStyles: DisabledButtonStyles = {
  backgroundDisabled: 'inputDisabled',
  textToneDisabled: 'disabled',
};

const lowDisabledAltStyles: DisabledButtonStyles = {
  backgroundDisabled: 'inputDisabled',
  borderDisabled: 'fieldDisabled',
  textToneDisabled: 'disabled',
};

const noneDisabledStyles: DisabledButtonStyles = {
  backgroundDisabled: 'neutral',
  textToneDisabled: 'disabled',
};

type Variants = Record<
  ButtonProminence,
  Record<ButtonTone, ButtonStyles | undefined>
>;

export const variants: Variants = {
  high: {
    primary: {
      background: 'primary',
      backgroundHover: 'primaryHover',
      backgroundActive: 'primaryActive',
      ...highDisabledStyles,
    },
    secondary: {
      background: 'secondary',
      backgroundHover: 'secondaryHover',
      backgroundActive: 'secondaryActive',
      ...highDisabledStyles,
    },
    neutral: {
      background: 'neutral',
      border: 'field',
      backgroundHover: 'neutralHover',
      backgroundActive: 'neutralActive',
      ...highDisabledAltStyles,
    },
    positive: {
      background: 'positive',
      backgroundHover: 'positiveHover',
      backgroundActive: 'positiveActive',
      ...highDisabledStyles,
    },
    critical: {
      background: 'critical',
      backgroundHover: 'criticalHover',
      backgroundActive: 'criticalActive',
      ...highDisabledStyles,
    },
    caution: undefined,
    info: undefined,
  },
  low: {
    primary: {
      background: 'surface',
      border: 'primary',
      borderWidth: 'large',
      textTone: 'primary',

      backgroundHover: 'none',
      borderHover: 'primaryHover',
      textToneHover: 'primaryHover',

      backgroundActive: 'none',
      borderActive: 'primaryActive',
      textToneActive: 'primaryActive',

      ...lowDisabledAltStyles,
    },
    secondary: {
      background: 'surface',
      border: 'secondary',
      borderWidth: 'large',
      textTone: 'secondary',

      backgroundHover: 'none',
      borderHover: 'secondaryHover',
      textToneHover: 'secondaryHover',

      backgroundActive: 'none',
      borderActive: 'secondaryActive',
      textToneActive: 'secondaryActive',

      ...lowDisabledAltStyles,
    },
    neutral: {
      background: 'neutralLow',
      backgroundHover: 'neutralLowHover',
      backgroundActive: 'neutralLowActive',
      ...lowDisabledStyles,
    },
    positive: {
      background: 'positiveLow',
      backgroundHover: 'positiveLowHover',
      backgroundActive: 'positiveLowActive',
      ...lowDisabledStyles,
    },
    caution: {
      background: 'cautionLow',
      backgroundHover: 'cautionLowHover',
      backgroundActive: 'cautionLowActive',
      ...lowDisabledStyles,
    },
    critical: {
      background: 'criticalLow',
      backgroundHover: 'criticalLowHover',
      backgroundActive: 'criticalLowActive',
      ...lowDisabledStyles,
    },
    info: {
      background: 'infoLow',
      backgroundHover: 'infoLowHover',
      backgroundActive: 'infoLowActive',
      ...lowDisabledStyles,
    },
  },
  none: {
    primary: {
      background: 'surface',
      textTone: 'primaryActive',
      backgroundHover: 'primaryLowHover',
      backgroundActive: 'primaryLowActive',
      ...noneDisabledStyles,
    },
    secondary: {
      background: 'surface',
      textTone: 'secondaryActive',
      backgroundHover: 'secondaryLowHover',
      backgroundActive: 'secondaryLowActive',
      ...noneDisabledStyles,
    },
    neutral: {
      background: 'surface',
      textTone: 'neutral',
      backgroundHover: 'neutralLowHover',
      backgroundActive: 'neutralLowActive',
      ...noneDisabledStyles,
    },
    positive: {
      background: 'surface',
      textTone: 'positive',
      backgroundHover: 'positiveLowHover',
      backgroundActive: 'positiveLowActive',
      ...noneDisabledStyles,
    },
    caution: {
      background: 'surface',
      textTone: 'caution',
      backgroundHover: 'cautionLowHover',
      backgroundActive: 'cautionLowActive',
      ...noneDisabledStyles,
    },
    critical: {
      background: 'surface',
      textTone: 'critical',
      backgroundHover: 'criticalLowHover',
      backgroundActive: 'criticalLowActive',
      ...noneDisabledStyles,
    },
    info: {
      background: 'surface',
      textTone: 'info',
      backgroundHover: 'infoLowHover',
      backgroundActive: 'infoLowActive',
      ...noneDisabledStyles,
    },
  },
} as const;

export const mapTokens = {
  fontSize: {
    medium: 'small',
    large: 'standard',
  },
  size: {
    medium: 'medium',
    large: 'large',
  },
  spacing: {
    medium: 'medium',
    large: 'xlarge',
  },
} as const;
