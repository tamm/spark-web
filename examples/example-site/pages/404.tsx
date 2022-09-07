import { ButtonLink } from '@spark-web/button';
import { Container } from '@spark-web/container';
import { Heading } from '@spark-web/heading';
import { ChevronRightIcon } from '@spark-web/icon';
import { Stack } from '@spark-web/stack';
import NextHead from 'next/head';

export default function NotFoundPage() {
  return (
    <Stack background="cautionLight" padding="xxlarge">
      <NextHead>
        <title>Page not found – Brighte</title>
      </NextHead>
      <Stack paddingY="xxlarge">
        <Container size="small">
          <Stack background="backdrop">
            <Stack background="backdrop" padding="xxlarge" position="relative">
              <Stack
                padding="xxlarge"
                align="center"
                gap="xlarge"
                style={{ textAlign: 'center' }}
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <Heading level="1">Sorry, we can't find that page</Heading>
                <ButtonLink href="/" size="large">
                  Back to home <ChevronRightIcon />
                </ButtonLink>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
