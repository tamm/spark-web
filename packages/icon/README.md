---
title: Icon
---

Spark uses the “outline” variants of the wonderful open-source
[Heroicons](https://heroicons.com/) library.

## Examples

### Size

Define the icon size.

```jsx live
<Inline gap="large" alignY="center">
  <LightBulbIcon size="xsmall" />
  <LightBulbIcon size="small" />
  <LightBulbIcon size="medium" />
  <LightBulbIcon size="large" />
</Inline>
```

### Tone

Define the icon tone.

```jsx live
<Row gap="large" dividers>
  <Inline gap="large">
    <LightBulbIcon tone="neutral" />
    <LightBulbIcon tone="muted" />
  </Inline>
  <Inline gap="large">
    <LightBulbIcon tone="info" />
    <LightBulbIcon tone="positive" />
    <LightBulbIcon tone="caution" />
    <LightBulbIcon tone="critical" />
    <LightBulbIcon tone="accent" />
  </Inline>
</Row>
```

### Contrast

To ensure icons have sufficient contrast, when on a dark background the
foreground tones “neutral” and “muted” will be inverted.

```jsx live
<Inline gap="large">
  <Box background="neutral" padding="small" borderRadius="small">
    <LightBulbIcon tone="neutral" />
  </Box>
  <Box background="neutral" padding="small" borderRadius="small">
    <LightBulbIcon tone="muted" />
  </Box>
</Inline>
```

## Props

| Prop  | Type                              | Default   | Description                |
| ----- | --------------------------------- | --------- | -------------------------- |
| size? | [SizeType][size-type]             | 'small'   | Sets the size of the icon. |
| tone? | [ForegroundTone][foreground-tone] | 'neutral' | Sets the tone of the icon. |

[size-type]:
  https://bitbucket.org/brighte-energy/energy/src/537c678a81090af545969504776c6b3d2e67743e/spark-web/packages/icon/src/createIcon.tsx#spark-web/packages/icon/src/createIcon.tsx-6
[foreground-tone]:
  https://bitbucket.org/brighte-energy/energy/src/14a694872cc43bb454981bada65f5f12b56f77c9/spark-web/packages/text/src/useForegroundTone.ts#spark-web/packages/text/src/useForegroundTone.ts-4
