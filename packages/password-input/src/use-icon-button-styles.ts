import { useButtonStyles } from '@spark-web/button';

export function useIconButtonStyles() {
  const [, buttonStyles] = useButtonStyles({
    iconOnly: false,
    prominence: 'none',
    size: 'medium',
    tone: 'neutral',
  });

  return [
    {
      alignItems: 'center',
      borderRadius: 'full',
      cursor: 'pointer',
      display: 'inline-flex',
      gap: 'small',
      height: 'small',
      justifyContent: 'center',
      paddingX: 'xsmall',
      position: 'relative',
      width: 'small',
    },
    buttonStyles,
  ] as const;
}
