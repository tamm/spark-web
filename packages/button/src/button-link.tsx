import { css } from '@emotion/css';
import { Box } from '@spark-web/box';
import type { LinkComponentProps } from '@spark-web/link';
import { useLinkComponent } from '@spark-web/link';
import { forwardRefWithAs } from '@spark-web/utils/ts';

import { resolveButtonChildren } from './resolve-button-children';
import type { CommonButtonProps } from './types';
import { useButtonStyles } from './use-button-styles';

export type ButtonLinkProps = LinkComponentProps & CommonButtonProps;

/** The appearance of a `Button`, with the semantics of a link. */
export const ButtonLink = forwardRefWithAs<'a', ButtonLinkProps>(
  (
    {
      data,
      href,
      id,
      prominence = 'high',
      size = 'medium',
      tone = 'primary',
      ...consumerProps
    },
    forwardedRef
  ) => {
    const LinkComponent = useLinkComponent(forwardedRef);
    const iconOnly = Boolean(consumerProps.label);
    const [boxProps, buttonStyles] = useButtonStyles({
      iconOnly,
      prominence,
      size,
      tone,
    });

    return (
      <Box
        {...boxProps}
        aria-label={consumerProps.label}
        as={LinkComponent}
        asElement="a"
        className={css(buttonStyles)}
        data={data}
        href={href}
        id={id}
        ref={forwardedRef}
      >
        {resolveButtonChildren({
          ...consumerProps,
          isLoading: false,
          prominence,
          size,
          tone,
        })}
      </Box>
    );
  }
);
