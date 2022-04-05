const strategyMap = {
  truncate: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  nowrap: {
    whiteSpace: 'nowrap',
  },
  // https://css-tricks.com/better-line-breaks-for-long-urls/
  breakword: {
    display: 'block',
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
  },
} as const;

export type TextOverflowStrategy = keyof typeof strategyMap;

export function useOverflowStrategy(strategy?: TextOverflowStrategy) {
  if (!strategy) {
    return null;
  }

  return strategyMap[strategy];
}
