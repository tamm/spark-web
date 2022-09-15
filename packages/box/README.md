---
title: Box
storybookPath: page-layout-box--default
isExperimentalPackage: false
---

The Box component is our lowest-level primitive. The goal of the Box component
is to map props to our tokens so that consumers should be able to use these
props for all of their styling needs. Ideally, you shouldn't need to use the
`className` or `style` prop at all. Internally, all Spark Web components are
composed using the Box component.

Box is a polymorphic component (meaning it will render different elements
depending on what is provided to the `as` prop). If no `as` prop is provided,
Box will render a `div`.

We also spread in consumer props, so any valid HTML attributes are also valid
for Box. Due to some clever TypeScript we can even warn you when you use an
invalid combination of props.

```jsx
<Box as="input" href="https://spark.brighte.com.au" />
```

In the example above, you should see a "red squiggly" under the `href` element
with the following error:

```console
Type '{ as: "input"; href: string; }' is not assignable to type 'IntrinsicAttributes & { as?: "input" | undefined; ref?: Ref<HTMLInputElement> | undefined; } & Omit<Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>>, "as"> & { ...; } & UnresponsiveBoxProps & ResponsiveBoxProps'.
  Property 'href' does not exist on type 'IntrinsicAttributes & { as?: "input" | undefined; ref?: Ref<HTMLInputElement> | undefined; } & Omit<Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>>, "as"> & { ...; } & UnresponsiveBoxProps & ResponsiveBoxProps'. Did you mean 'ref'?
```

Unfortunately TypeScript errors can be pretty cryptic sometimes 🙃.

**Pro tip**: copying the error message and pasting it into
[TypeScript Error Translator](https://ts-error-translator.vercel.app/) can
sometimes help make these errors easier to understand.

A minimal CSS reset is also applied to each element rendered with Box. This
helps prevent styles from "leaking" out and effecting other elements (which
should make it easier to incrementally adopt Spark Web into existing projects).
If you provide a non-Spark component to the `as` prop instead of an element, it
is recommended that you also use the `asElement` prop so the appropriate styles
can be applied.

## Examples

### Responsive styles

Most of Box's props accept a string value (usually corresponding to a token), we
also accept an object for responsive styles.

```jsx live
<Box
  background="primaryLow"
  display="inline-flex"
  flexDirection={{ mobile: 'row', tablet: 'column', desktop: 'rowReverse' }}
  gap={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}
  padding={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}
>
  <Row
    align="center"
    alignY="center"
    background="primary"
    height={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}
    width={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}
  >
    <Text>1</Text>
  </Row>
  <Row
    align="center"
    alignY="center"
    background="primary"
    height={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}
    width={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}
  >
    <Text>2</Text>
  </Row>
  <Row
    align="center"
    alignY="center"
    background="primary"
    height={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}
    width={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}
  >
    <Text>3</Text>
  </Row>
</Box>
```

Resize your browser to see the example above change at different breakpoints.

### Backgrounds

Box stores the background in a provider. We can use this to work out what colour
to use by default for text elements.

```jsx live
<Stack gap="large">
  <Columns collapseBelow="tablet" gap="large" template={[1, 1, 1]}>
    <Box
      shadow="medium"
      background="surface"
      height="large"
      display="flex"
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
    >
      <Text weight="semibold">surface</Text>
    </Box>
    <Box
      shadow="medium"
      background="positiveLight"
      height="large"
      display="flex"
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
    >
      <Text weight="semibold">positiveLight</Text>
    </Box>
    <Box
      shadow="medium"
      background="infoLight"
      height="large"
      display="flex"
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
    >
      <Text weight="semibold">infoLight</Text>
    </Box>
    <Box
      shadow="medium"
      background="cautionLight"
      height="large"
      display="flex"
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
    >
      <Text weight="semibold">cautionLight</Text>
    </Box>
    <Box
      shadow="medium"
      background="criticalLight"
      height="large"
      display="flex"
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
    >
      <Text weight="semibold">criticalLight</Text>
    </Box>
  </Columns>
  <Columns collapseBelow="tablet" gap="large" template={[1, 1, 1]}>
    <Box
      shadow="medium"
      background="muted"
      height="large"
      display="flex"
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
    >
      <Text weight="semibold">muted</Text>
    </Box>
    <Box
      shadow="medium"
      background="positive"
      height="large"
      display="flex"
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
    >
      <Text weight="semibold">positive</Text>
    </Box>
    <Box
      shadow="medium"
      background="info"
      height="large"
      display="flex"
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
    >
      <Text weight="semibold">info</Text>
    </Box>
    <Box
      shadow="medium"
      background="caution"
      height="large"
      display="flex"
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
    >
      <Text weight="semibold">caution</Text>
    </Box>
    <Box
      shadow="medium"
      background="critical"
      height="large"
      display="flex"
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
    >
      <Text weight="semibold">critical</Text>
    </Box>
  </Columns>
</Stack>
```

Notice that the Text in the example above doesn't use the tone prop, the colour
is worked out using the BackgroundProvider in Box.

**Note:** this will only work if you use the `background` prop. If you try to
style the background colour in any other way the Text component will not know
what colour the background is and so cannot invert its colour to make sure that
its contents are readable.

```jsx
<Box style={{ background: 'midnightblue' }} padding="large">
  <Text>Good luck reading this!</Text>
</Box>
```

## Props

| Prop            | Type                                                                                                           | Default | Description                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| children        | React.ReactNode                                                                                                |         | Children element to be rendered inside the component.                                                                                                        |
| id?             | string                                                                                                         |         | An identifier that must be unique in the whole document.                                                                                                     |
| className?      | string                                                                                                         |         | Custom css styles.                                                                                                                                           |
| asElement?      | string                                                                                                         |         | An option to indicate what the underlying element of the box should be.                                                                                      |
| data?           | [DataAttributeMap][data-attribute-map]                                                                         |         | Sets data attributes on the component.                                                                                                                       |
|                 |                                                                                                                |         |                                                                                                                                                              |
| background?     | keyof [BrighteTheme][brighte-theme]['color']['background']                                                     |         | Sets the backgroud of the component.                                                                                                                         |
| cursor?         | 'default' \| 'pointer'                                                                                         |         | Sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.                                                                    |
| minHeight?      | 0                                                                                                              |         | Sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified.                     |
| minWidth?       | 0                                                                                                              |         | Sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified.                       |
| overflow?       | 'hidden' \| 'scroll' \| 'visible' \| 'auto'                                                                    |         | Sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions. |
| shadow?         | keyof [BrighteTheme][brighte-theme]['shadow']                                                                  |         | Adds shadow effects around the element's frame.                                                                                                              |
| userSelect?     | 'none'                                                                                                         |         | Controls whether the user can select text.                                                                                                                   |
|                 |                                                                                                                |         |                                                                                                                                                              |
| margin?         | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the margin area on all 4 sides of the element at once.                                                                                                  |
| marginTop?      | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the margin area on the top side.                                                                                                                        |
| marginBottom?   | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the margin area on the bottom side.                                                                                                                     |
| marginLeft?     | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the margin area on the left side.                                                                                                                       |
| marginRight?    | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the margin area on the right side.                                                                                                                      |
| marginY?        | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the margin area on the top and bottom side.                                                                                                             |
|                 |                                                                                                                |         |                                                                                                                                                              |
| padding?        | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the padding width on all 4 sides of the element at once.                                                                                                |
| paddingTop?     | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the padding width on the top side.                                                                                                                      |
| paddingBottom?  | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the padding width on the bottom side.                                                                                                                   |
| paddingLeft?    | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the padding width on the left side.                                                                                                                     |
| paddingRight?   | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the padding width on the right side.                                                                                                                    |
| paddingY?       | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the padding width on the top and bottom side.                                                                                                           |
| paddingX?       | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the padding width on the left and right side.                                                                                                           |
|                 |                                                                                                                |         |                                                                                                                                                              |
| border?         | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['border']['color']>                     |         | Sets the colour of the element's border.                                                                                                                     |
| borderRadius?   | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['border']['color']>                     |         | Rounds the corners of the element's outer border edge.                                                                                                       |
| borderWidth?    | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['border']['color']>                     |         | Sets the width of the element's border.                                                                                                                      |
|                 |                                                                                                                |         |                                                                                                                                                              |
| height?         | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the element's height.                                                                                                                                   |
| width?          | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['spacing']>                             |         | Sets the element's width.                                                                                                                                    |
|                 |                                                                                                                |         |                                                                                                                                                              |
| alignItems?     | 'flex-start' \| 'center' \| 'flex-end' \| 'stretch'                                                            |         | Controls alignment of items on the cross axis.                                                                                                               |
| gap?            | 'small' \| 'medium' \| 'xsmall' \| 'large' \| 'xxsmall' \| 'xlarge' \| 'xxlarge'                               |         | Size of the gap between each child element.                                                                                                                  |
| flexDirection?  | 'row' \| 'row-reverse' \| 'column' \| 'column-reverse'                                                         |         | Defines the main axis, or how the children are placed.                                                                                                       |
| justifyContent? | 'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'space-between'                                         |         | Sets how to distribute space between and around content items along the main axis.                                                                           |
| flexWrap?       | [ResponsiveProp][responsive-prop]\<'nowrap' \| 'wrap'>                                                         |         | Allow flex items to flow onto multiple lines.                                                                                                                |
|                 |                                                                                                                |         |                                                                                                                                                              |
| alignSelf?      | 'flex-start' \| 'center' \| 'flex-end' \| 'stretch'                                                            |         | Override's parent's `align-items` value and controls alignment of item's on the cross axis.                                                                  |
| flex?           | [ResponsiveProp][responsive-prop]\<0 \| 1>                                                                     |         | Sets how a flex item will grow or shrink to fit the space available in its flex container.                                                                   |
| flexGrow?       | [ResponsiveProp][responsive-prop]\<0 \| 1>                                                                     |         | Sets the flex grow factor of a flex item main size.                                                                                                          |
| flexShrink?     | [ResponsiveProp][responsive-prop]\<0 \| 1>                                                                     |         | Sets the flex shrink factor of a flex item.If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.    |
|                 |                                                                                                                |         |
| position?       | [ResponsiveProp][responsive-prop]\<'absolute' \| 'fixed' \| 'relative' \| 'sticky'>                            |         | Sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.    |
| top?            | [ResponsiveProp][responsive-prop]\<0>                                                                          |         | Specifies vertical position of a positioned element. Has no effect on non-positioned elements.                                                               |
| bottom?         | [ResponsiveProp][responsive-prop]\<0>                                                                          |         | Specifies vertical position of a positioned element. Has no effect on non-positioned elements.                                                               |
| left?           | [ResponsiveProp][responsive-prop]\<0>                                                                          |         | Specifies horizontal position of a positioned element. Has no effect on non-positioned elements.                                                             |
| right?          | [ResponsiveProp][responsive-prop]\<0>                                                                          |         | Specifies horizontal position of a positioned element. Has no effect on non-positioned elements.                                                             |
| zIndex?         | [ResponsiveProp][responsive-prop]\<keyof [BrighteTheme][brighte-theme]['elevation']>                           |         | Sets the z-order of a positioned element and its descendants or flex-items. Overlapping element with a larger z-index cover those with a smaller one.        |
|                 |                                                                                                                |         |
| display?        | [ResponsiveProp][responsive-prop]\<'block' \| 'flex' \| 'inline' \| 'inline-block' \| 'inline-flex' \| 'none'> |         | Sets the display of element.                                                                                                                                 |
| opacity?        | [ResponsiveProp][responsive-prop]\<number>                                                                     |         | Sets the opacity of the element.                                                                                                                             |

By default, Box renders a `div` element. You can customise this via the `as`
prop. Extra props will also be forwarded to the underlying element.

[brighte-theme]:
  https://github.com/brighte-labs/spark-web/blob/e503bea4f7668d187ec7a78f99c5ed374417588b/packages/theme/src/makeTheme.ts#L158
[responsive-prop]:
  https://github.com/brighte-labs/spark-web/blob/e503bea4f7668d187ec7a78f99c5ed374417588b/packages/theme/src/themeUtils.ts#L11
[data-attribute-map]:
  https://github.com/brighte-labs/spark-web/blob/e7f6f4285b4cfd876312cc89fbdd094039aa239a/packages/utils/src/internal/buildDataAttributes.ts#L1
