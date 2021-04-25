import * as React from 'react';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import type { PickStyleProps, BaseProps } from '../styles/types';
import { useTouchFeedback } from '@wonder-ui/hooks';

export interface ButtonBaseProps extends BaseProps {
  autofocus?: boolean;
  disabled?: boolean;
  /**
   * Click event
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonBaseRoot = styled('button', {
  name: 'WuiButtonBase',
  slot: 'Root'
})<PickStyleProps<ButtonBaseProps, 'disabled'>>(({ theme, styleProps }) => ({
  display: 'inline-block',
  position: 'relative',
  textAlign: 'center',
  outline: 0,
  // Remove #0f0d0d highlight
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent', // Reset default value
  border: '1px solid transparent',
  margin: 0, // Remove the margin in Safari
  borderRadius: 0,
  padding: 0, // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none', // Reset
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  transition: theme.transitions.create(
    ['background-color', 'border-color', 'box-shadow', 'color', 'opacity'],
    { duration: theme.transitions.duration.shorter }
  ),

  // So we take precedent over the style of a native <a /> element.
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.
  },

  ...(styleProps.disabled && {
    pointerEvents: 'none', // Disable link interactions
    cursor: 'not-allowed'
  })
}));

const ButtonBase: React.FC<ButtonBaseProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiButtonBase' });

    const {
      autofocus = true,
      disabled = false,
      className,
      component,
      ...rest
    } = props;

    const styleProps = { disabled };

    const classes = useClasses({ ...props, styleProps, name: 'WuiButtonBase' });

    const containerProps = useTouchFeedback({
      ...props,
      disabled,
      prefixClassName: classes.root,
      activeClassName: 'state-active'
    });

    return (
      <ButtonBaseRoot
        as={component}
        data-autofocus={autofocus}
        role="button"
        aria-disabled={disabled}
        disabled={disabled}
        styleProps={styleProps}
        ref={ref}
        {...containerProps}
        {...rest}
      ></ButtonBaseRoot>
    );
  }
);

export default ButtonBase;
