---
title: Container
storybookPath: page-layout-container--default
---

The container centers and constrains the maximum width of the content it wraps.

```jsx live
<Container size="small">
  <Placeholder height={64} />
</Container>
```

## Examples

### Size

Use the `size` prop to adjust the maximum width of the container.

```jsx live
<Stack gap="large">
  <Container size="xsmall">
    <Placeholder label="xsmall" height={64} />
  </Container>
  <Container size="small">
    <Placeholder label="small" height={64} />
  </Container>
  <Container size="medium">
    <Placeholder label="medium" height={64} />
  </Container>
  <Container size="large">
    <Placeholder label="large" height={64} />
  </Container>
</Stack>
```

## Props

| Prop     | Type                                                | Default | Description                                            |
| -------- | --------------------------------------------------- | ------- | ------------------------------------------------------ |
| children | React.ReactNode                                     |         | Children elements to be rendered inside the container. |
| data?    | [DataAttributeMap][data-attribute-map]              |         | Sets data attributes on the element.                   |
| size?    | keyof [BrighteTheme][brighte-theme]['contentWidth'] |         | Sets the size of the container.                        |

[data-attribute-map]:
  https://bitbucket.org/brighte-energy/energy/src/14a694872cc43bb454981bada65f5f12b56f77c9/spark-web/packages/utils-spark/src/buildDataAttributes.ts#spark-web/packages/utils-spark/src/buildDataAttributes.ts-1
[brighte-theme]:
  https://bitbucket.org/brighte-energy/energy/src/24cfd1fbc07ea0f737a4580df8b20e970a32e369/spark-web/packages/theme/src/maketheme.ts#spark-web/packages/theme/src/maketheme.ts-173
