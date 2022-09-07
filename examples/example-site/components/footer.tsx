import { css } from '@emotion/css';
import { useFocusRing } from '@spark-web/a11y';
import { Box } from '@spark-web/box';
import { Button } from '@spark-web/button';
import { Columns } from '@spark-web/columns';
import { Container } from '@spark-web/container';
import { Heading } from '@spark-web/heading';
import { Hidden } from '@spark-web/hidden';
import { QuestionMarkCircleIcon } from '@spark-web/icon';
import { Inline } from '@spark-web/inline';
import { Link } from '@spark-web/link';
import { Row } from '@spark-web/row';
import { Stack } from '@spark-web/stack';
import { Text } from '@spark-web/text';
import { useTheme } from '@spark-web/theme';

import {
  ABN_NUMBER,
  ACL_NUMBER,
  PRIVACY_POLICY_URL,
  TERMS_AND_CONDITIONS_URL,
} from '../lib/constants';
import { useLinkIconStyles } from '../lib/use-link-icon-styles';
import { AppStoreLogo, GooglePlayLogo } from './vectors/app-stores';
import { BrighteIcon } from './vectors/logo';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './vectors/social';

export function Footer() {
  return (
    <Stack as="footer" background="surface">
      <Container size="xlarge">
        <Stack
          background="surface"
          paddingX={{ mobile: 'large', tablet: 'xxlarge' }}
          dividers
        >
          <Sitemap />
          <AppStoreLinks />
          <BottomFooter />
          <HelpButton />
        </Stack>
      </Container>
    </Stack>
  );
}

const navigation = [
  [
    {
      heading: { label: 'Homeowners', href: '#' },
      links: [
        { label: 'How it works', href: '#' },
        { label: 'Repayment calculator', href: '#' },
        { label: 'Responsible payment plans', href: '#' },
        { label: 'Find tradies', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      heading: { label: 'Partners', href: '#' },
      links: [
        { label: 'Why partner with us?', href: '#' },
        { label: 'Partner support', href: '#' },
        { label: 'Code of conduct', href: '#' },
        { label: 'Partner stories', href: '#' },
        { label: 'Target market determinations', href: '#' },
      ],
    },
  ],
  [
    {
      heading: { label: 'Brighte', href: '#' },
      links: [
        { label: 'About us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Media', href: '#' },
        { label: 'Investors', href: '#' },
      ],
    },
    {
      heading: { label: 'Support', href: '#' },
      links: [
        { label: 'Help centre', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Complaints', href: '#' },
        { label: 'Making informed decisions', href: '#' },
        { label: 'Financial difficulty', href: '#' },
        { label: 'BNPL code of practice', href: '#' },
      ],
    },
  ],
];

function Sitemap() {
  const styles = useLinkIconStyles();

  return (
    <Stack gap="xxlarge" paddingY="xxlarge">
      <Inline gap="xxlarge" alignY="top">
        <Hidden below="tablet">
          <Link href="/" className={css(styles)}>
            <BrighteIcon />
          </Link>
        </Hidden>
        <Columns
          data={{ column: true }}
          collapseBelow="desktop"
          gap="xxlarge"
          flex={1}
        >
          {navigation.map((columns, index) => (
            <Columns
              key={index}
              data={{ column: true }}
              collapseBelow="tablet"
              gap="xxlarge"
            >
              {columns.map(column => (
                <Stack key={column.heading.label} gap="xlarge">
                  <Heading level="2">
                    <Link href={column.heading.href}>
                      {column.heading.label}
                    </Link>
                  </Heading>
                  <Stack as="ul" gap="large">
                    {column.links.map(link => (
                      <Text key={link.label} as="li">
                        <Link href={link.href}>{link.label}</Link>
                      </Text>
                    ))}
                  </Stack>
                </Stack>
              ))}
            </Columns>
          ))}
        </Columns>
        <Hidden below="desktop">
          <SocialLinks />
        </Hidden>
      </Inline>
      <Hidden above="tablet">
        <SocialLinks />
      </Hidden>
    </Stack>
  );
}

const socialLinks = [
  {
    label: 'Brighte on Facebook',
    href: 'https://www.facebook.com/brighteau',
    icon: <FacebookIcon />,
    color: '#3c5a9a',
    backgroundColor: '#f0f5ff',
  },
  {
    label: 'Brighte on Twitter',
    href: 'https://twitter.com/brighteau',
    icon: <TwitterIcon />,
    color: '#55acee',
    backgroundColor: '#e3f3ff',
  },
  {
    label: 'Brighte on Instagram',
    href: 'https://www.instagram.com/brighte_australia/',
    icon: <InstagramIcon />,
    color: '#000',
    backgroundColor: '#f9f0ff',
  },
];

function SocialLinks() {
  const theme = useTheme();
  const focusStyles = useFocusRing();

  return (
    <Row gap="large" as="ul">
      {socialLinks.map(({ backgroundColor, color, href, icon, label }) => (
        <Box
          as="a"
          aria-label={label}
          rel="noreferrer"
          target="_blank"
          title={label}
          href={href}
          key={href}
          // Styles
          alignItems="center"
          background="primaryLow"
          borderRadius="full"
          display="flex"
          justifyContent="center"
          height="medium"
          width="medium"
          className={css({
            ':hover': { transform: 'scale(1.1)' },
            ':focus': focusStyles,
          })}
          style={{
            backgroundColor,
            color,
            transitionProperty:
              'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
            transitionTimingFunction: theme.animation.standard.easing,
            transitionDuration: `${theme.animation.standard.duration}ms`,
          }}
        >
          {icon}
        </Box>
      ))}
    </Row>
  );
}

function AppStoreLinks() {
  return (
    <Stack gap="xlarge" paddingY="xxlarge">
      <Inline gap={{ mobile: 'large', desktop: 'xxlarge' }} alignY="center">
        <Text size="large" weight="semibold">
          Download the Brighte app to find vendors, apply and manage your
          account
        </Text>
        <Inline gap="small">
          <Link
            href="https://itunes.apple.com/au/app/brightepay/id1198643731?mt=8"
            aria-label="Download on the App Store"
            title="Download on the App Store"
          >
            <AppStoreLogo />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=au.com.brighte.brighte_consumer_app"
            aria-label="Get it on Google Play"
            title="Get it on Google Play"
          >
            <GooglePlayLogo />
          </Link>
        </Inline>
      </Inline>
    </Stack>
  );
}

function BottomFooter() {
  return (
    <Stack paddingY="xxlarge" gap="xxlarge">
      <Box
        display="flex"
        flexDirection={{ mobile: 'column', tablet: 'row' }}
        gap={{ mobile: 'large', tablet: 'small' }}
      >
        <Text>
          &copy; {new Date().getFullYear()} Brighte Capital Pty Ltd (ABN{' '}
          {ABN_NUMBER})
        </Text>
        <Hidden below="tablet">
          <Text>&middot;</Text>
        </Hidden>
        <Text>
          <Link href={PRIVACY_POLICY_URL}>Privacy policy</Link>
        </Text>
        <Hidden below="tablet">
          <Text>&middot;</Text>
        </Hidden>
        <Text>
          <Link href={TERMS_AND_CONDITIONS_URL}>Site terms</Link>
        </Text>
      </Box>
      <Row>
        <Text>
          Australian Credit License Number {ACL_NUMBER}. All applications are
          subject to Brighte’s credit approval criteria. Fees, Terms and
          Conditions apply.
        </Text>
      </Row>
    </Stack>
  );
}

function HelpButton() {
  return (
    <Stack
      position="fixed"
      width="full"
      bottom={0}
      left={0}
      right={0}
      style={{ pointerEvents: 'none' }}
    >
      <Container size="xlarge">
        <Row
          align="right"
          paddingX={{ mobile: 'large', tablet: 'xxlarge' }}
          paddingY="xxlarge"
        >
          <span style={{ pointerEvents: 'auto' }}>
            <Button>
              <QuestionMarkCircleIcon />
              Help
            </Button>
          </span>
        </Row>
      </Container>
    </Stack>
  );
}
