import { fade } from '../styles/colorManipulator';

export default theme => ({
  root: {
    boxSizing: 'border-box',
    position: 'absolute',
    contain: 'content',
    width: 270,
    zIndex: 13500,
    borderRadius: 13,
    color: '#000',
    textAlign: 'center',
    overflow: 'hidden',
    willChange: 'transform,opacity',
    outline: 'none',
  },
  body: {
    padding: 15,
    borderRadius: '13px 13px 0 0',
    position: 'relative',
    background: theme.palette.background.modal,
    fontSize: 14,
    ...theme.hairline.create('bottom'),
    '&.noButtons': {
      borderRadius: 13,
      ...theme.hairline.remove('bottom')
    },
    '&.toast': {
      display: 'inline-block',
      borderRadius: 5,
      background: 'rgba(0,0,0,0.7)',
      '& $text': {
        color: theme.palette.getContrastText('rgba(0,0,0,0.7)')
      }
    }
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 500,
    color: theme.palette.text.primary,
    '& + $text': {
      marginTop: 5
    }
  },
  text: {
    wordWrap: 'break-word',
    wordBreak:'break-all',
    minWidth: 80,
    color: theme.palette.text.secondary
  },
  buttonGroup: {
    position: 'relative',
    display: 'flex',
    height: 44,
    '&.vertical': {
      display: 'block',
      height: 'auto',
      '& $button': {
        borderRadius: 0,
        ...theme.hairline.remove('right'),
        ...theme.hairline.remove('top'),
        ...theme.hairline.create('bottom'),
        '&:last-child': {
          borderRadius: '0 0 13px 13px',
          ...theme.hairline.remove('bottom')
        }
      }
    }
  },
  button: {
    width: '100%',
    padding: '0 5px',
    height: 44,
    fontSize: 17,
    fontWeight: 'normal',
    lineHeight: '44px',
    textAlign: 'center',
    display: 'block',
    position: 'relative',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    boxSizing: 'border-box',
    flex: 1,
    color: fade(theme.palette.primary.main, 0.8),
    background: theme.palette.background.modal,
    ...theme.hairline.create('right'),
    '&:active, &.active-state': {
      backgroundColor: fade(theme.palette.background.paper, 0.85)
    },
    '&:first-child': {
        borderRadius: '0 0 0 13px',
    },
    '&:last-child': {
        borderRadius: '0 0 13px 0',
    },
    '&:first-child:last-child': {
        borderRadius: '0 0 13px 13px'
    },
    '&.primary': {
      fontWeight: 500,
    }
  }
})


