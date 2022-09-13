import { Box } from '@spark-web/box';
import { forwardRefWithAs } from '@spark-web/utils/ts';

import type { LinkComponentProps } from './link-context';
import { useLinkComponent } from './link-context';

export type LinkProps = LinkComponentProps;

export const Link = forwardRefWithAs<'a', LinkProps>((props, ref) => {
  const LinkComponent = useLinkComponent(ref);

  return <Box as={LinkComponent} asElement="a" ref={ref} {...props} />;
});
