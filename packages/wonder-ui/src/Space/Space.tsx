import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { spaceClasses, SpaceStyleProps, useClasses } from './SpaceClasses';

type SpaceSize = 'small' | 'medium' | 'large' | number;
export interface SpaceProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'size' | 'wrap'> {
  /**
   * Flex alignItems
   * @default center
   */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /**
   * Css api
   */
  classes?: Partial<typeof spaceClasses>;
  /**
   * @ignore
   */
  component?: React.ElementType;
  /**
   * Direction
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Gutter size
   * @default medium
   */
  size?: SpaceSize | [SpaceSize, SpaceSize];
  /**
   * Split node
   */
  split?: React.ReactNode;
  /**
   * Wrap
   */
  wrap?: boolean;
  /**
   * @ignore
   */
  ref?: React.Ref<any>;
}

function getNumberSize(theme: any, size: SpaceSize) {
  const sizeConfig = {
    small: theme.spacing(0.5),
    medium: theme.spacing(1),
    large: theme.spacing(2)
  };

  return typeof size != 'number' ? sizeConfig[size] : size || 0;
}

function getSize(
  theme: any,
  options: Pick<SpaceProps, 'size' | 'wrap' | 'direction'>
) {
  let horizontalSize: SpaceSize, verticalSize: SpaceSize;

  if (Array.isArray(options.size)) {
    horizontalSize = options.size[0];
    verticalSize = options.size[1];
  } else {
    let size = options.size || 0;
    horizontalSize = size;
    verticalSize =
      options.wrap && options.direction === 'horizontal' ? size : 0;
  }

  return [
    getNumberSize(theme, horizontalSize),
    getNumberSize(theme, verticalSize)
  ];
}

export const SpaceRoot = styled('div', { name: 'WuiSpace', slot: 'Root' })<{
  styleProps: SpaceStyleProps;
}>(({ theme, styleProps }) => {
  const [, verticalSize] = getSize(theme, styleProps);

  return {
    display: 'inline-flex',
    boxSizing: 'border-box',
    margin: 0,
    ...(styleProps.wrap &&
      styleProps.direction === 'horizontal' && {
        flexWrap: 'wrap',
        marginBottom: -verticalSize
      }),

    ...(styleProps.direction === 'vertical' && {
      flexDirection: 'column',
      width: '100%'
    }),
    //@ts-expect-error
    alignItems: {
      center: 'center',
      start: 'flex-start',
      end: 'flex-end',
      baseline: 'baseline',
      stretch: 'stretch'
    }[styleProps.align]
  };
});

const SpaceItem = styled('div', { name: 'WuiSpace', slot: 'Item' })<{
  styleProps: SpaceStyleProps;
}>(({ theme, styleProps }) => {
  const [horizontalSize, verticalSize] = getSize(theme, styleProps);

  return {
    marginRight: styleProps.direction === 'horizontal' ? horizontalSize : 0,
    marginBottom:
      styleProps.direction === 'horizontal' ? verticalSize : horizontalSize,

    ...(styleProps.direction === 'vertical' && {
      width: '100%'
    }),

    '&:last-child':
      styleProps.direction === 'horizontal'
        ? {
            marginRight: 0
          }
        : {
            marginBottom: 0
          },
    '&:empty': {
      display: 'none'
    }
  };
});

const Space = React.forwardRef<HTMLElement, SpaceProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiSpace' });
  const {
    align = 'center',
    children,
    className,
    classes: classesInput,
    component,
    direction = 'horizontal',
    size = 'medium',
    split,
    theme,
    wrap = false,
    ...rest
  } = props;

  const childrenArray = React.Children.toArray(children);
  const styleProps = {
    ...props,
    size,
    wrap,
    align,
    direction
  };

  const classes = useClasses(styleProps);

  return (
    <SpaceRoot
      as={component}
      className={classes.root}
      ref={ref as React.Ref<HTMLDivElement>}
      styleProps={styleProps}
      theme={theme}
      {...rest}
    >
      {childrenArray.map((child, index) => {
        return (
          <React.Fragment key={index}>
            {index != 0 && split && (
              <SpaceItem
                className={classes.item}
                styleProps={styleProps}
                theme={theme}
              >
                {split}
              </SpaceItem>
            )}
            <SpaceItem
              className={classes.item}
              styleProps={styleProps}
              theme={theme}
            >
              {child}
            </SpaceItem>
          </React.Fragment>
        );
      })}
    </SpaceRoot>
  );
});

export default Space;
