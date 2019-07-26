import styled from 'styled-components';
import { fade } from '../styles/colorManipulator';
import utils from '../../utils/utils';

export const WUI_button_base = styled.button({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  // Remove grey highlight
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent', // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 'none',
  border: 0,
  margin: 0, // Remove the margin in Safari
  borderRadius: 0,
  padding: 0, // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  '-moz-appearance': 'none', // Reset
  '-webkit-appearance': 'none', // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none', // Remove Firefox dotted outline.
  },
  '&[disabled]': {
    pointerEvents: 'none', // Disable link interactions
    cursor: 'default',
  }
})


export const WUI_button = styled(WUI_button_base)( (props) => {
  const { theme, variant, color, size, fullWidth: _fullWidth } = props;
  console.log(props);
  
  const text = utils.equal(
    [variant, 'text'], 
    {
      padding: '6px 8px'
    }
  );
  const textPrimary = utils.equal(
    [variant, 'text'],
    [color, 'primary'],
    {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      }
    }
  );
  const textSecondary = utils.equal(
    [variant, 'text'],
    [color, 'secondary'],
    {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    }
  );
  const outlined = utils.equal(
    [variant, 'outlined'],
    {
      padding: '5px 16px',
      border: `1px solid rgba(255, 255, 255, 0.23)`,
      '&[disabled]': {
        border: `1px solid ${theme.palette.action.disabled}`,
      },
    }
  );
  const outlinedPrimary = utils.equal(
    [variant, 'outlined'],
    [color, 'primary'],
    {
      color: theme.palette.primary.main,
      border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
      '&:hover': {
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    }
  );
  const outlinedSecondary = utils.equal(
    [variant, 'outlined'],
    [color, 'secondary'],
    {
      color: theme.palette.secondary.main,
      border: `1px solid ${fade(theme.palette.secondary.main, 0.5)}`,
      '&:hover': {
        border: `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&[disabled]': {
        border: `1px solid ${theme.palette.action.disabled}`,
      },
    }
  );
  const contained = utils.equal(
    [variant, 'contained'], 
    {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&[focusVisible]': {
        boxShadow: theme.shadows[6],
      },
      '&:active': {
        boxShadow: theme.shadows[8],
      },
      '&[disabled]': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground,
      },
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300],
        },
        '&[disabled]': {
          backgroundColor: theme.palette.action.disabledBackground,
        },
      },
    }
  );

  const containedPrimary = utils.equal(
    [variant, 'contained'], 
    [color, 'primary'], 
    {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main,
        },
      },
    }
  );

  const containedSecondary = utils.equal(
    [variant, 'contained'], 
    [color, 'secondary'], 
    {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main,
        },
      },
    }
  );

  const colorInherit =  utils.equal(
    [color, 'inherit'], 
    {
      color: 'inherit',
      borderColor: 'currentColor',
    }
  )

  const sizeSmall = utils.equal(
    [size, 'small'],
    {
      padding: '4px 8px',
      fontSize: theme.typography.pxToRem(13),
    }
  )

  const sizeLarge = utils.equal(
    [size, 'large'],
    {
      padding: '8px 24px',
      fontSize: theme.typography.pxToRem(15),
    }
  )

  const fullWidth = utils.equal(
    [_fullWidth, true],
    {
      width: '100%',
    }
  )

  return {
    lineHeight: 1.75,
    boxSizing: 'border-box',
    minWidth: 64,
    padding: '4px 16px',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      '&[disabled]': {
        backgroundColor: 'transparent',
      },
    },
    '&[disabled]': {
      color: theme.palette.action.disabled,
    },
    ...text,
    ...textPrimary,
    ...textSecondary,
    ...outlined,
    ...outlinedPrimary,
    ...outlinedSecondary,
    ...contained,
    ...containedPrimary,
    ...containedSecondary,
    ...colorInherit,
    ...sizeSmall,
    ...sizeLarge,
    ...fullWidth
  }
})
