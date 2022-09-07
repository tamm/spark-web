import { useFocusRing } from '@spark-web/a11y';
import { useTheme } from '@spark-web/theme';
import { useMemo } from 'react';

export function useLinkIconStyles() {
  const theme = useTheme();
  const focusRingStyles = useFocusRing();
  return useMemo(() => {
    return {
      color: theme.color.background.primary,
      borderRadius: theme.border.radius.small,
      display: 'inline-block',
      margin: -theme.spacing.xsmall,
      padding: theme.spacing.xsmall,
      transitionProperty:
        'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      transitionTimingFunction: theme.animation.standard.easing,
      transitionDuration: `${theme.animation.standard.duration}ms`,
      ':focus': focusRingStyles,
      ':hover': { color: theme.backgroundInteractions.primaryHover },
      ':active': { color: theme.backgroundInteractions.primaryActive },
    };
  }, [
    focusRingStyles,
    theme.animation.standard.duration,
    theme.animation.standard.easing,
    theme.backgroundInteractions.primaryActive,
    theme.backgroundInteractions.primaryHover,
    theme.border.radius.small,
    theme.color.background.primary,
    theme.spacing.xsmall,
  ]);
}
