import { Container } from '@spark-web/container';
import { Stack } from '@spark-web/stack';
import type { ReactNode } from 'react';

import { Footer } from './footer';
import { Header } from './header';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Stack background="surface" style={{ minHeight: '100%' }}>
      <Header />
      <Stack as="main" flex={1}>
        <Container size="xlarge">
          <Stack paddingX={{ tablet: 'xxlarge' }}>{children}</Stack>
        </Container>
      </Stack>
      <Footer />
    </Stack>
  );
}
