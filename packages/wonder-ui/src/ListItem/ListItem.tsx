import * as React from 'react';
import ArrowForward, { ArrowForwardProps } from '../ArrowForward';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import ListItemExtra from '../ListItemExtra';
import ListItemMedia from '../ListItemMedia';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { groupBy } from '@wonder-ui/utils';
import { listItemClasses, useClasses } from './ListItemClasses';
import { css } from '@wonder-ui/utils';

export interface ListItemProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'type'> {
  /**
   * 水平对齐
   */
  alignItems?: 'flex-start' | 'center';
  /**
   * arrow
   */
  arrow?: 'empty' | 'horizontal' | 'vertical' | 'vertical-up';
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * Css api
   */
  classes?: Partial<typeof listItemClasses>;
  /**
   * Root element
   */
  component?: React.ElementType;
  /**
   * divider
   */
  divider?: boolean;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Disabled ripple
   */
  disableRipple?: boolean;
  /**
   * 选中状态
   * @default false
   */
  selected?: boolean;
  /**
   * 是否展示点击状态
   * @default false
   */
  button?: boolean;
  /**
   * HTML Attributes
   */
  className?: string;
  /**
   * ref
   */
  ref?: React.Ref<any>;
}

type StyleProps = {
  styleProps: Partial<ListItemProps>;
};

const ListItemRoot = styled('li', {
  name: 'WuiListItem',
  slot: 'Root'
})<StyleProps>(({ theme, styleProps }) => ({
  overflow: 'hidden',
  position: 'relative',
  transition: 'background-color 200ms',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  outline: 0,
  border: 0,
  display: 'flex',
  alignItems: styleProps.alignItems || 'center',
  textDecoration: 'none',
  paddingLeft: theme.spacing(2),
  cursor: 'auto',
  whiteSpace: 'unset'
}));

const ListItemInner = styled('div', {
  name: 'WuiListItem',
  slot: 'Inner'
})<StyleProps>(({ theme, styleProps }) => ({
  width: '100%',
  minHeight: 44,
  display: 'flex',
  alignItems: 'inherit',
  alignSelf: 'stretch',
  color: 'inherit',
  boxSizing: 'border-box',
  padding: theme.spacing(1, 1.5, 1, 0),
  ...(styleProps.divider && {
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    borderBottomWidth: 'thin'
  }),
  ...(styleProps.disabled && {
    opacity: theme.palette.action.disabledOpacity
  })
}));

const ListItemBody = styled('div', {
  name: 'WuiListItem',
  slot: 'Body'
})({
  display: 'flex',
  width: '100%',
  alignItems: 'inherit',
  boxSizing: 'border-box',
  color: 'inherit'
});

const ListItemArrow = styled(ArrowForward, {
  name: 'WuiListItem',
  slot: 'Arrow'
})<ArrowForwardProps>(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.3),
  alignItems: 'inherit',
  pointerEvents: 'none',
  fontSize: 15
}));

const direction = {
  horizontal: 'right',
  vertical: 'down',
  'vertical-up': 'up'
} as const;

const ListItem = React.forwardRef<HTMLElement, ListItemProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiListItem' });

    const {
      alignItems = 'center',
      arrow = 'empty',
      button = false,
      children,
      className,
      divider = false,
      disabled = false,
      disableRipple = false,
      component = 'li',
      selected = false,
      ...rest
    } = props;

    const styleProps = {
      ...props,
      alignItems,
      button,
      divider,
      disabled,
      selected
    };

    const classes = useClasses(styleProps);

    const childGroup = React.useMemo(
      () =>
        groupBy(React.Children.toArray(children), (child) => {
          if (React.isValidElement(child)) {
            if (child.type === ListItemMedia) {
              return 'media';
            }

            if (child.type === ListItemExtra) {
              return 'extra';
            }

            return 'body';
          }
          return 'body';
        }),
      [children]
    );

    let rootProps: any = {};

    if (button) {
      rootProps = {
        as: ButtonBase,
        component,
        disableRipple,
        disabled,
        selected,
        ...rest
      };
    }

    return (
      <ListItemRoot
        as={component}
        className={css(classes.root, className)}
        styleProps={styleProps}
        ref={ref as React.Ref<any>}
        {...rest}
        {...rootProps}
      >
        {childGroup.media &&
          childGroup.media.map((media: any) =>
            React.cloneElement(media, { disabled })
          )}
        <ListItemInner styleProps={styleProps} className={classes.inner}>
          <ListItemBody className={classes.body}>
            {childGroup.body}
          </ListItemBody>
          {childGroup.extra}
          {arrow && arrow != 'empty' && (
            <ListItemArrow
              className={classes.arrow}
              direction={direction[arrow]}
            />
          )}
        </ListItemInner>
      </ListItemRoot>
    );
  }
);

export default ListItem;
