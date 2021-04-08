import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { BaseProps, ClassNameMap } from '../styles/types';
import Typography, { TypographyProps } from '../Typography';

export interface ListItemTextProps extends BaseProps {
  /**
   * @description Css api
   */
  classes?: Partial<ClassNameMap<'root' | 'primary' | 'secondary'>>;
  /**
   * @description Primary text
   */
  primary?: React.ReactNode;
  /**
   * @description Primary TypographyProps
   */
  primaryTypographyProps?: TypographyProps;
  /**
   * @description Secondary text
   */
  secondary?: React.ReactNode;
  /**
   * @description Secondary TypographyProps
   */
  secondaryTypographyProps?: TypographyProps;
  /**
   * @description Disable Typography
   * @default false
   */
  disableTypography?: boolean;
}

const ListItemTextRoot = styled('div', {
  name: 'WuiListItemText',
  slot: 'Root'
})(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: 'inherit',
  verticalAlign: 'middle',
  userSelect: 'none',
  flex: '1 1 auto'
}));

const ListItemText: React.FC<ListItemTextProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiListItemText' });
    const {
      children,
      className,
      component,
      disableTypography = false,
      primary: primaryProp,
      primaryTypographyProps,
      secondary: secondaryProp,
      secondaryTypographyProps,
      ...rest
    } = props;

    let primary: any = primaryProp != null ? primaryProp : children;
    let secondary: any = secondaryProp;

    const styleProps = {};

    const classes = useClasses({
      ...props,
      styleProps,
      name: 'WuiListItemText'
    });

    if (primary != null && primary.type !== Typography && !disableTypography) {
      primary = (
        <Typography
          variant="body1"
          className={classes.primary}
          component="span"
          color="primary"
          {...primaryTypographyProps}
        >
          {primary}
        </Typography>
      );
    }

    if (
      secondary != null &&
      secondary.type !== Typography &&
      !disableTypography
    ) {
      secondary = (
        <Typography
          variant="body2"
          component="div"
          className={classes.secondary}
          color="secondary"
          {...secondaryTypographyProps}
        >
          {secondary}
        </Typography>
      );
    }

    return (
      <ListItemTextRoot
        as={component}
        className={classes.root}
        ref={ref}
        {...rest}
      >
        {primary}
        {secondary}
      </ListItemTextRoot>
    );
  }
);

export default ListItemText;
