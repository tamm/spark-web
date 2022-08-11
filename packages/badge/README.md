---
title: Badge
isExperimentalPackage: true
---

A badge is a decorative indicator used to either call attention to an item or
for communicating non-actionable, supplemental information.

## Example

```jsx live
<Badge tone="info">Label</Badge>
```

### Tones

```jsx live
const tones = ['accent', 'caution', 'critical', 'info', 'neutral'];

return (
  <Inline gap="small">
    {tones.map(tone => (
      <Badge key={tone} tone={tone}>
        {tone}
      </Badge>
    ))}
  </Inline>
);
```

## Props

### Badge

| Prop     | Type                                                                     | Default | Description                            |
| -------- | ------------------------------------------------------------------------ | ------- | -------------------------------------- |
| children | string \|number                                                          |         | The label of the badge.                |
| data?    | [DataAttributeMap][data-attribute-map]                                   |         | Sets data attributes on the component. |
| tone?    | "accent" \| "caution" \| "critical" \| "info" \| "neutral" \| "positive" |         | The tone of the badge.                 |

### IndicatorDot

| Prop   | Type                                                                     | Default | Description                                                                                       |
| ------ | ------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------- |
| data?  | [DataAttributeMap][data-attribute-map]                                   |         | Sets data attributes on the component.                                                            |
| label? | string                                                                   |         | When the intent isn't provided by text, you must supply an "aria-label" for assistive tech users. |
| tone?  | "accent" \| "caution" \| "critical" \| "info" \| "neutral" \| "positive" |         | The tone of the badge.                                                                            |

[data-attribute-map]:
  https://github.com/brighte-labs/spark-web/blob/e7f6f4285b4cfd876312cc89fbdd094039aa239a/packages/utils/src/internal/buildDataAttributes.ts#L1
