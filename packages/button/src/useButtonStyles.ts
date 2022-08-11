import { useFocusRing } from '@spark-web/a11y';
import { useTheme } from '@spark-web/theme';

import type { ButtonProminence, ButtonSize, ButtonTone } from './types';
import { mapTokens, variants } from './utils';

////////////////////////////////////////////////////////////////////////////////

/**
 * useButtonStyles
 *
 * Custom hook for styling buttons and certain links.
 * Returns a tuple where the first item is an object of props to spread onto the
 * underlying `Box` component, and the second item is a CSS object that can be
 * passed to Emotion's `css` function.
 */
export function useButtonStyles({
  iconOnly,
  prominence,
  size,
  tone,
}: UseButtonStylesProps) {
  const theme = useTheme();
  const focusRingStyles = useFocusRing({ tone });
  const disabledFocusRingStyles = useFocusRing({ tone: 'disabled' });
  const variant = variants[prominence][tone];
  const isLarge = size === 'large';

  const transitionColors = {
    transitionProperty:
      'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    transitionTimingFunction: theme.animation.standard.easing,
    transitionDuration: `${theme.animation.standard.duration}ms`,
  };

  return [
    {
      alignItems: 'center',
      background: variant?.background,
      border: variant?.border,
      borderWidth: variant?.borderWidth,
      borderRadius: isLarge ? 'medium' : 'small',
      cursor: 'pointer',
      display: 'inline-flex',
      gap: 'small',
      height: mapTokens.size[size],
      justifyContent: 'center',
      paddingX: iconOnly ? undefined : mapTokens.spacing[size],
      position: 'relative',
      width: iconOnly ? mapTokens.size[size] : undefined,
    },

    {
      ...transitionColors,

      // Styles for buttons that aren't disabled.
      // Using the :not() pseudo-class so we don't have to undo the styles when
      // the button is disabled.
      '&:not([aria-disabled=true])': {
        ':hover': {
          borderColor: variant?.borderHover
            ? theme.border.color[variant.borderHover]
            : undefined,
          backgroundColor: variant?.backgroundHover
            ? theme.backgroundInteractions[variant.backgroundHover]
            : undefined,

          // Style button text when hovering
          '> *': {
            ...transitionColors,
            color: variant?.textToneHover
              ? theme.color.foreground[variant.textToneHover]
              : undefined,
            stroke: variant?.textToneHover
              ? theme.color.foreground[variant.textToneHover]
              : undefined,
          },
        },

        ':active': {
          borderColor: variant?.borderActive
            ? theme.border.color[variant.borderActive]
            : undefined,
          backgroundColor: variant?.backgroundActive
            ? theme.backgroundInteractions[variant?.backgroundActive]
            : undefined,
          transform: 'scale(0.98)',

          // Style button text when it's active
          '> *': {
            ...transitionColors,
            color: variant?.textToneActive
              ? theme.color.foreground[variant.textToneActive]
              : undefined,
            stroke: variant?.textToneActive
              ? theme.color.foreground[variant.textToneActive]
              : undefined,
          },
        },

        ':focus': focusRingStyles,
      },

      '&[aria-disabled=true]': {
        backgroundColor: variant?.backgroundDisabled
          ? theme.color.background[variant?.backgroundDisabled]
          : undefined,

        borderColor: variant?.borderDisabled
          ? theme.border.color[variant.borderDisabled]
          : undefined,

        cursor: 'default',

        '*': {
          color: variant?.textToneDisabled
            ? theme.color.foreground[variant.textToneDisabled]
            : undefined,
          stroke: variant?.textToneDisabled
            ? theme.color.foreground[variant.textToneDisabled]
            : undefined,
        },

        ':focus': disabledFocusRingStyles,
      },
    },
  ] as const;
}

export type UseButtonStylesProps = {
  /** Whether the children of the button is a single icon or not. */
  iconOnly: boolean;
  /** Sets the visual prominence of the button. */
  prominence: ButtonProminence;
  /** Sets the size of the button. */
  size: ButtonSize;
  /** Sets the tone of the button. */
  tone: ButtonTone;
};
