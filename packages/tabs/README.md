---
title: Tabs
storybookPath: page-layout-tabs--default
isExperimentalPackage: true
---

Tabs are a set of layered sections of content (known as tab panels) that display
one panel of content at a time. Each tab panel has an associated tab element,
that when activated, displays the panel. The list of tab elements is arranged
along the top edge of the currently displayed panel.

## Example

```jsx live
<Tabs>
  <TabList>
    <Tab>First tab</Tab>
    <Tab>Second tab</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Stack paddingY="medium">
        <Placeholder label="Content from first panel" height={64} />
      </Stack>
    </TabPanel>
    <TabPanel>
      <Stack paddingY="medium">
        <Placeholder label="Content from second panel" height={64} />
      </Stack>
    </TabPanel>
  </TabPanels>
</Tabs>
```

### Default Index

By default, users will be shown the first tab. This can be overridden by
providing a `defaultIndex` prop. You can also have _no_ tabs active by default
by providing a `defaultIndex` of `-1`.

```jsx live
<Tabs defaultIndex={1}>
  <TabList>
    <Tab>First tab</Tab>
    <Tab>Second tab (default)</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Stack paddingY="medium">
        <Placeholder label="Content from first panel" height={64} />
      </Stack>
    </TabPanel>
    <TabPanel>
      <Stack paddingY="medium">
        <Placeholder
          label="Content from second panel (this should be selected by default)"
          height={64}
        />
      </Stack>
    </TabPanel>
  </TabPanels>
</Tabs>
```

### Disabled tabs

Individual tabs can be be disabled by providing them with a `disabled` prop.

```jsx live
<Tabs>
  <TabList>
    <Tab>First tab</Tab>
    <Tab>Second tab</Tab>
    <Tab disabled>Third tab (disabled)</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Stack paddingY="medium">
        <Placeholder label="Content from first panel" height={64} />
      </Stack>
    </TabPanel>
    <TabPanel>
      <Stack paddingY="medium">
        <Placeholder label="Content from second panel" height={64} />
      </Stack>
    </TabPanel>
    <TabPanel>
      <Stack paddingY="medium">
        <Placeholder
          label="Content from third panel. You should not be able to see me!"
          height={64}
        />
      </Stack>
    </TabPanel>
  </TabPanels>
</Tabs>
```

### Manual Activation

By default, when a tab has focus, users can cycle through the enabled tabs using
the arrow keys. If `activationMode` is set to `"manual"`, users can activate a
tab by pressing the `Enter` or `Space` key when the tab you want to view has
focus.

It is very important for usability that functionality of components behaves in a
consistent manor. It is therefore recommended that you _do not_ use the manual
activation mode unless you absolutely need it.

```jsx live
<Tabs activationMode="manual">
  <TabList>
    <Tab>First tab</Tab>
    <Tab>Second tab</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Stack paddingY="medium">
        <Placeholder label="Content from first panel" height={64} />
      </Stack>
    </TabPanel>
    <TabPanel>
      <Stack paddingY="medium">
        <Placeholder label="Content from second panel" height={64} />
      </Stack>
    </TabPanel>
  </TabPanels>
</Tabs>
```

## Props

### Tabs

| Prop            | Type                                   | Default     | Description                                                                                            |
| --------------- | -------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| activationMode? | 'automatic' \| 'manual'                | 'automatic' | When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked. |
| children        | ReactNode                              |             | Children elements to be rendered within the component. Expected to be `TabList` and `TabPanels`.       |
| data?           | [DataAttributeMap][data-attribute-map] |             | Sets data attributes on the component.                                                                 |
| defaultIndex?   | number                                 | 0           | Sets data attributes on the component.                                                                 |

### TabList

| Prop     | Type                                   | Default | Description                                                                                          |
| -------- | -------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| children | Array\<ReactElement\<TabProps>>        |         | Children elements to be rendered within the component. Expected to be more than one `Tab` component. |
| data?    | [DataAttributeMap][data-attribute-map] |         | Sets data attributes on the component.                                                               |

### Tab

| Prop      | Type                                   | Default | Description                                                 |
| --------- | -------------------------------------- | ------- | ----------------------------------------------------------- |
| children  | ReactNode                              |         | Children elements to be rendered within the component.      |
| data?     | [DataAttributeMap][data-attribute-map] |         | Sets data attributes on the component.                      |
| disabled? | boolean                                |         | When true, prevents the user from interacting with the tab. |

### TabPanels

| Prop     | Type                                   | Default | Description                                                                                               |
| -------- | -------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| children | Array\<ReactElement\<TabPanelProps>>   |         | Children elements to be rendered within the component. Expected to be more than one `TabPanel` component. |
| data?    | [DataAttributeMap][data-attribute-map] |         | Sets data attributes on the component.                                                                    |

### TabPanel

| Prop     | Type                                   | Default | Description                                            |
| -------- | -------------------------------------- | ------- | ------------------------------------------------------ |
| children | ReactNode                              |         | Children elements to be rendered within the component. |
| data?    | [DataAttributeMap][data-attribute-map] |         | Sets data attributes on the component.                 |

[data-attribute-map]:
  https://github.com/brighte-labs/spark-web/blob/e7f6f4285b4cfd876312cc89fbdd094039aa239a/packages/utils/src/internal/buildDataAttributes.ts#L1
