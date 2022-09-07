import { css } from '@emotion/css';
import { Box } from '@spark-web/box';
import { Button } from '@spark-web/button';
import { Container } from '@spark-web/container';
import { Field } from '@spark-web/field';
import { Heading } from '@spark-web/heading';
import { CheckCircleIcon, ChevronRightIcon } from '@spark-web/icon';
import { Row } from '@spark-web/row';
import { Stack } from '@spark-web/stack';
import { Text } from '@spark-web/text';
import { TextInput } from '@spark-web/text-input';
import { TextList } from '@spark-web/text-list';
import NextHead from 'next/head';
import type { FormEvent } from 'react';

export default function Home() {
  return (
    <Stack background="cautionLight" padding="xxlarge" position="relative">
      <NextHead>
        <title>
          Finance solar system & energy-efficient home products with Brighte
        </title>
      </NextHead>
      <Stack paddingY="xxlarge">
        <Box
          as="video"
          src="https://static-assets.prod.cloud.brighte.com.au/videos/hero-solar-2560x1000.mp4"
          autoPlay
          muted
          loop
          playsInline
          // Styles
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          height="full"
          width="full"
          className={css({ objectFit: 'cover' })}
        />
        <Container size="small">
          <Stack background="primary" padding="xxlarge" position="relative">
            <Stack
              paddingX={{ tablet: 'xxlarge' }}
              paddingY="xxlarge"
              align="center"
              gap="xlarge"
              style={{ textAlign: 'center' }}
            >
              <Stack gap="xxlarge">
                <Heading level="1">The future is Brighte</Heading>
                <Text size="large" weight="semibold">
                  We help finance your solar with zero upfront costs and 0%
                  interest - and no nasty catches.
                </Text>
              </Stack>

              <Stack style={{ textAlign: 'left' }}>
                <TextList icon={<CheckCircleIcon size="xsmall" />}>
                  <Text weight="semibold" size="large">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    See your neighbour's solar uptake
                  </Text>
                  <Text weight="semibold" size="large">
                    Compare solar costs & see what size you might need
                  </Text>
                  <Text weight="semibold" size="large">
                    Get up to 3 quotes & pay with Brighte
                  </Text>
                </TextList>
              </Stack>
              <Row
                as="form"
                alignY="bottom"
                gap="small"
                paddingTop="xxlarge"
                onSubmit={(event: FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  alert('Thank you for your submission');
                }}
              >
                <Stack
                  background="surface"
                  borderRadius="small"
                  overflow="hidden"
                >
                  <Field label="Postcode or suburb" labelVisibility="hidden">
                    <TextInput placeholder="Postcode or suburb" />
                  </Field>
                </Stack>
                <Button tone="secondary" type="submit">
                  Start here <ChevronRightIcon />
                </Button>
              </Row>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
