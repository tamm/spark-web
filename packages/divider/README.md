---
title: Divider
storybookPath: page-layout-divider--default
---

Used to separate and group content. In most cases use the
[Stack](/package/stack).

```jsx live
<Divider />
```

## Examples

### Width

Defines the “width” of the divider.

```jsx live
<Stack gap="large">
  <Stack gap="small">
    <Text>standard</Text>
    <Divider width="standard" />
  </Stack>
  <Stack gap="small">
    <Text>large</Text>
    <Divider width="large" />
  </Stack>
</Stack>
```

### Color

Defines the “color” of the divider.

```jsx live
<Stack gap="large">
  <Stack gap="small">
    <Text>standard</Text>
    <Divider color="standard" />
  </Stack>
  <Stack gap="small">
    <Text>neutral</Text>
    <Divider color="neutral" />
  </Stack>
</Stack>
```

## Props

| Prop      | Type                                | Default    | Description                      |
| --------- | ----------------------------------- | ---------- | -------------------------------- |
| color?    | [DividerColor][divider-color]       |            | Sets the color of the divider.   |
| width?    | keyof [BrighteTheme][brighte-theme] | 'standard' | Sets the width of the divider.   |
| vertical? | boolean                             |            | Displays the divider vertically. |

[divider-color]:
  https://bitbucket.org/brighte-energy/energy/src/537c678a81090af545969504776c6b3d2e67743e/spark-web/packages/divider/src/Divider.tsx#spark-web/packages/divider/src/Divider.tsx-16
[brighte-theme]:
  https://bitbucket.org/brighte-energy/energy/src/24cfd1fbc07ea0f737a4580df8b20e970a32e369/spark-web/packages/theme/src/makeTheme.ts#spark-web/packages/theme/src/makeTheme.ts-173
