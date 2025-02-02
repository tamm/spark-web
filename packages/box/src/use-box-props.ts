import type { BoxStyleProps } from './use-box-styles';
import { useBoxStyles } from './use-box-styles';

/** Separate the style properties from the element attributes. */
export function useBoxProps(props: BoxStyleProps) {
  const {
    alignItems,
    alignSelf,
    background,
    border,
    borderRadius,
    borderWidth,
    bottom,
    cursor,
    display,
    flex,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    gap,
    height,
    justifyContent,
    left,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY,
    minHeight,
    minWidth,
    opacity,
    overflow,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
    position,
    right,
    shadow,
    top,
    userSelect,
    width,
    zIndex,
    ...attributes
  } = props;
  const styles = useBoxStyles({
    alignItems,
    alignSelf,
    background,
    border,
    borderRadius,
    borderWidth,
    bottom,
    cursor,
    display,
    flex,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    gap,
    height,
    justifyContent,
    left,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY,
    minHeight,
    minWidth,
    opacity,
    overflow,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
    position,
    right,
    shadow,
    top,
    userSelect,
    width,
    zIndex,
  });

  return { styles, attributes };
}
