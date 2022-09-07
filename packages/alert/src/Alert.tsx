import { css } from '@emotion/css';
import { Button } from '@spark-web/button';
import type { IconProps } from '@spark-web/icon';
import {
  CheckCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
  XIcon,
} from '@spark-web/icon';
import { Row } from '@spark-web/row';
import { Stack } from '@spark-web/stack';
import { Text } from '@spark-web/text';
import { useTheme } from '@spark-web/theme';
import type { DataAttributeMap } from '@spark-web/utils/internal';
import type { ReactNode } from 'react';
import { Fragment } from 'react';

const toneToIcon = {
  caution: ExclamationIcon,
  critical: ExclamationIcon,
  info: InformationCircleIcon,
  positive: CheckCircleIcon,
};

type AlertTones = keyof typeof toneToIcon;
type IconWithRef = typeof toneToIcon[AlertTones];
type IconWithWithoutRef = (props: IconProps) => JSX.Element;

export type AlertProps = {
  children: ReactNode;
  data?: DataAttributeMap;
  heading?: string;
  icon?: IconWithRef | IconWithWithoutRef;
  id?: string;
  tone: AlertTones;
} & (
  | {
      closeLabel: string;
      onClose: () => void;
    }
  | {
      closeLabel?: never;
      onClose?: never;
    }
);

export function Alert({
  children,
  closeLabel = 'Dismiss alert',
  data,
  heading,
  icon,
  onClose,
  tone = 'info',
}: AlertProps) {
  const Icon = icon || toneToIcon[tone];

  return (
    <Row
      aria-live="polite"
      data={data}
      role="alert"
      // Styles
      alignY={heading ? 'top' : 'center'}
      background={`${tone}Low`}
      borderRadius="medium"
      gap="medium"
    >
      <Row
        alignY="top"
        gap="medium"
        padding="large"
        paddingRight={onClose ? 'none' : undefined}
        width="full"
        style={{ minWidth: 0 }}
      >
        <IconWrapper>
          <Icon size="xsmall" tone={tone} />
        </IconWrapper>
        <Stack flex={1} gap="medium">
          {heading && <Text weight="semibold">{heading}</Text>}
          <Content>{children}</Content>
        </Stack>
      </Row>
      {onClose && (
        <Row padding="small" alignSelf="start">
          <Button
            label={closeLabel}
            onClick={onClose}
            prominence="low"
            tone={tone}
          >
            <XIcon size="xxsmall" />
          </Button>
        </Row>
      )}
    </Row>
  );
}

function IconWrapper({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const responsiveStyles = theme.utils.responsiveStyles({
    mobile: { height: theme.typography.text.standard.mobile.capHeight },
    tablet: { height: theme.typography.text.standard.tablet.capHeight },
  });

  return (
    <Row
      aria-hidden="true"
      align="center"
      alignY="center"
      cursor="default"
      flexShrink={0}
      className={css(responsiveStyles)}
    >
      {children}
    </Row>
  );
}

function Content({ children }: { children: ReactNode }) {
  if (typeof children === 'string' || typeof children === 'number') {
    return <Text>{children}</Text>;
  }

  return <Fragment>{children}</Fragment>;
}
