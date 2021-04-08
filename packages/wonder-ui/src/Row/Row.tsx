import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { BaseProps, ClassNameMap, PickStyleProps } from '../styles/types';
import GridContext from './GridContext';
import Container, { ContainerProps } from '../Container';
import { getGutter, getResponsiveValue, ResponsiveValue } from './utils';
import { breakpointKeys } from '../styles/theme/createBreakpoints';

export interface RowProps extends BaseProps {
  /**
   * @description flex align
   */
  alignItems?: ResponsiveValue<
    'start' | 'end' | 'center' | 'baseline' | 'stretch'
  >;
  alignContent?: ResponsiveValue<
    'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
  >;
  columns?: number;
  /**
   * @description 子节点
   */
  children?: React.ReactNode;
  /**
   * @description Root element
   * @default div
   */
  component?: keyof React.ReactHTML | React.ComponentType;
  classes?: Partial<ClassNameMap<'root' | 'container'>>;
  ContainerProps?: ContainerProps;
  gutter: number | [number, number];
  justifyContent?: ResponsiveValue<
    'start' | 'end' | 'center' | 'around' | 'between' | 'evenly'
  >;
  nowrap?: boolean;
  rowCols?: ResponsiveValue<'auto' | boolean | number>;
}

export const RowRoot = styled('div', {
  name: 'WuiRow',
  slot: 'Root'
})<
  PickStyleProps<
    RowProps,
    'alignContent' | 'alignItems' | 'justifyContent' | 'gutter' | 'nowrap'
  >
>(
  ({ theme, styleProps }) => {
    const { gutterX, gutterY } = getGutter(styleProps.gutter);

    return {
      display: 'flex',
      boxSizing: 'border-box',
      flexWrap: styleProps.nowrap ? 'nowrap' : 'wrap',
      marginTop: `calc(${theme.spacing(gutterY)}px * -1)`,
      marginRight: `calc(${theme.spacing(gutterX)}px / -2)`,
      marginLeft: `calc(${theme.spacing(gutterX)}px / -2)`
    };
  },
  ({ theme, styleProps }) => {
    const alignItemsProp = getResponsiveValue(styleProps.alignItems);
    const alignContentProp = getResponsiveValue(styleProps.alignContent);
    const justifyContentProp = getResponsiveValue(styleProps.justifyContent);

    const styles: any = {};

    breakpointKeys.forEach((key) => {
      const mediaQueryKey = theme.breakpoints.up(key);
      const alignItems = alignItemsProp[key];
      const alignContent = alignContentProp[key];
      const justifyContent = justifyContentProp[key];

      styles[mediaQueryKey] = {
        /** Styles applied to the root element if alignItem={} */
        ...(alignItems && {
          alignItems: {
            center: 'center',
            start: 'flex-start',
            end: 'flex-end',
            baseline: 'baseline',
            stretch: 'stretch'
          }[alignItems]
        }),
        /** Styles applied to the root element if justifyContent={} */
        ...(justifyContent && {
          justifyContent: {
            start: 'flex-start',
            end: 'flex-end',
            center: 'center',
            between: 'space-between',
            around: 'space-around',
            evenly: 'space-evenly'
          }[justifyContent]
        }),
        /** Styles applied to the root element if alignContent={} */
        ...(alignContent && {
          alignContent: {
            start: 'flex-start',
            end: 'flex-end',
            center: 'center',
            between: 'space-between',
            around: 'space-around',
            stretch: 'stretch'
          }[alignContent]
        })
      };
    });

    return styles;
  }
);

const Row: React.FC<RowProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiRow' });
  const {
    alignContent = 'start',
    alignItems = 'start',
    justifyContent = 'start',
    className,
    columns = 12,
    component,
    children,
    ContainerProps,
    nowrap = false,
    gutter = 0,
    rowCols,
    ...rest
  } = props;

  const styleProps = {
    alignContent,
    alignItems,
    justifyContent,
    gutter,
    nowrap
  };

  const classes = useClasses({
    ...props,
    styleProps,
    name: 'WuiRow'
  });

  const { gutterX } = getGutter(styleProps.gutter);

  return (
    <GridContext.Provider
      value={{
        gutter,
        columns,
        rowCols
      }}
    >
      <Container
        size="fluid"
        gutter={gutterX / 2}
        className={classes.container}
        {...ContainerProps}
      >
        <RowRoot
          as={component}
          className={classes.root}
          styleProps={styleProps}
          ref={ref}
          {...rest}
        >
          {children}
        </RowRoot>
      </Container>
    </GridContext.Provider>
  );
});

export default Row;
