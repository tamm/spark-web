---
title: Spark Design System
---

# Spark Design System

Spark is a design system built with [React](https://reactjs.org) and
[Emotion](https://emotion.sh/docs/introduction)

The Spark Design System is currently only available inside of the energy
monorepo but we plan to eventually distribute it as a package that the rest of
Brighte can consume once it has been battle-tested on more real-life project and
the API is stable.

## Set up

Wrap the root of your app in a `SparkProvider`. If you are using Next.js you
should do this in [\_app](https://nextjs.org/docs/advanced-features/custom-app)

```jsx
import { SparkProvider } from '@spark-web/core';

export default function App({ children }) {
  return <SparkProvider>{children}</SparkProvider>;
}
```
