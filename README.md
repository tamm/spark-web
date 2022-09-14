# Brighte Spark Design System

[WIP]

## Contributing

See the
[contributing guide](https://github.com/brighte-labs/spark-web/blob/main/CONTRIBUTING.md)
for detailed instructions on how to get started with our project.

## Known Issues

### Storybook shows a blank screen

This usually happens when editing or adding components used in stories, and is
usually because Storybook has cached stale components.

Run

```bash
yarn dev:storybook:no-cache
```

once to reload the cache. Or, iff that doesn't work

```bash
yarn clean && yarn dev:storybook
```
