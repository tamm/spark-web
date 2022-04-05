export * from '../components/spark-components';

export function Render({
  children,
}: {
  children: () => JSX.Element;
}): JSX.Element {
  return children();
}
