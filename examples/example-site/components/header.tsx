import { css } from '@emotion/css';
import { VisuallyHidden } from '@spark-web/a11y';
import { Box } from '@spark-web/box';
import { Button } from '@spark-web/button';
import { Container } from '@spark-web/container';
import { Link } from '@spark-web/link';

import { useLinkIconStyles } from '../lib/use-link-icon-styles';
import { BrighteLogo } from './vectors/logo';

export function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      background="surface"
    >
      <Container size="xlarge">
        <Box
          display="flex"
          alignItems="center"
          paddingX={{ mobile: 'large', tablet: 'xxlarge' }}
          paddingY="large"
          style={{ justifyContent: 'space-between' }}
        >
          <HomeLink />
          <Button tone="neutral">Login</Button>
        </Box>
      </Container>
    </Box>
  );
}

function HomeLink() {
  const styles = useLinkIconStyles();

  return (
    <Link href="/" className={css(styles)}>
      <VisuallyHidden>Home</VisuallyHidden>
      <BrighteLogo />
    </Link>
  );
}
