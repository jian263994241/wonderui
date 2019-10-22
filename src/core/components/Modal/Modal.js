import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import css from 'dom-helpers/css';
import { ThemeProvider } from 'styled-components';
import Backdrop from '../Backdrop';
import useTheme from '../styles/useTheme';
import Portal from 'rc-mounter';
import { useForkRef } from '../../utils/reactHelpers';
import useEventCallback from '../../utils/useEventCallback';
import elementAcceptingRef from '../../utils/elementAcceptingRef';
import ModalManager, { ariaHidden }  from './ModalManager';
import ownerDocument from '../../utils/ownerDocument';
import { createChainedFunction } from '../../utils/helpers';
import TrapFocus from './TrapFocus';

const defaultManager = new ModalManager();

function getContainer(container) {
  container = typeof container === 'function' ? container() : container;
  return ReactDOM.findDOMNode(container);
}

/**
 * 浮层, 对`Dialog`等组件提供基础支持;
 * @visibleName Modal 浮层
 */
const Modal = React.forwardRef((props, ref) => {
  const {
    visible,
    hideBackdrop,
    BackdropProps,
    children,
    container,
    disablePortal = false,
    onRendered,
    manager = defaultManager,
    disableScrollLock,
    disableEnforceFocus,
    disableAutoFocus,
    disableRestoreFocus,
    hasTransition,
    closeAfterTransition,
    keepMounted,
    onCancel,
    afterClose,
    ...rest
  } = props;

  const theme = useTheme();
  const [exited, setExited] = React.useState(true);
  const modal = React.useRef({});
  const mountNodeRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const handleRef = useForkRef(modalRef, ref);
  const childrenRef = React.useRef(null);
  const backdropRef = React.useRef(null);

  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  const originZIndex = React.useMemo(()=>{
    if(childrenRef.current){
      const zIndex = css(childrenRef.current, 'zIndex');
      if(zIndex){
        return Number(zIndex);
      }
    }
    return null;
  }, [childrenRef.current]);

  const setZIndex = (zindex)=>{
    if(!originZIndex) return null;

    if(childrenRef.current){
      childrenRef.current.style.zIndex = originZIndex + zindex + 1;
    }
    if(backdropRef.current){
      backdropRef.current.style.zIndex = originZIndex + zindex;
    }
  };

  const isTopModal = React.useCallback(() => manager.isTopModal(getModal()), [manager]);

  React.useEffect(()=>{
    if(isTopModal()){
      setZIndex(manager.modals.length);
    }else{
      setZIndex(-1);
    }
  }, [visible, originZIndex, childrenRef, backdropRef, manager.modals.length]);
  

  const handleMounted = ()=>{
    manager.mount(getModal(), { disableScrollLock });

    // Fix a bug on Chrome where the scroll isn't initially 0.
    modalRef.current.scrollTop = 0;
  }

  const handlePortalRef = useEventCallback( node =>{
    if (!node) {
      return;
    }

    mountNodeRef.current = node;
    
    if (visible && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, true);
    }

    if(onRendered){
      onRendered();
    }

  });

  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;

    manager.add(getModal(), resolvedContainer);

    // The element was already mounted.
    if (modalRef.current) {
      handleMounted();
    }
  });

  const handleClose = React.useCallback(() => {
    manager.remove(getModal());
    
    if(afterClose){
      afterClose();
    }
  }, [manager]);

  React.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);

  React.useEffect(() => {
    if (visible) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [visible, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  if (!keepMounted && !visible && (!hasTransition || exited)) {
    return null;
  }

  const handleEnter = ()=>{
    setExited(false);
  }

  const handleExited = ()=>{
    setExited(true);

    if(closeAfterTransition){
      handleClose();
    }
  }

  const childProps = {};

  childProps.ref = childrenRef;

  if (children.role === undefined) {
    childProps.role = children.role || 'document';
  }
  if (children.tabIndex === undefined) {
    childProps.tabIndex = children.tabIndex || '-1';
  }
  
  if(hasTransition){
    childProps.in = visible;
    childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
    childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Portal 
        ref={handlePortalRef} 
        container={container} 
        disablePortal={disablePortal}
      >
        <div 
          role="presentation"
          ref={handleRef}
          {...rest}
        >
          
          <TrapFocus
            disableEnforceFocus={disableEnforceFocus}
            disableAutoFocus={disableAutoFocus}
            disableRestoreFocus={disableRestoreFocus}
            getDoc={getDoc}
            isEnabled={isTopModal}
            open={visible}
          >
            <div>
            {hideBackdrop ? null : <Backdrop ref={backdropRef} visible={visible} onClick={onCancel} {...BackdropProps}/>}
            {React.cloneElement(children, childProps)}
            </div>
            
          </TrapFocus>
        </div>
      </Portal>
    </ThemeProvider>
  )
});


Modal.propTypes = {
  /**
   * 是否需要`backdrop`
   */
  hideBackdrop: PropTypes.bool,
  /**
   * Backdrop props
   */
  BackdropProps: PropTypes.object,
  /**
   * 内容
   */
  children: elementAcceptingRef,
  /**
   * @ignore
   */
  manager: PropTypes.instanceOf(ModalManager),
  /**
   * 是否过渡
   */
  hasTransition: PropTypes.bool,
  /**
   * 过渡后关闭
   */
  closeAfterTransition: PropTypes.bool,
  /**
   * 保持节点
   */
  keepMounted: PropTypes.bool,
  /**
   * 点击背景关闭浮层
   */
  onCancel: PropTypes.func,
}


export default Modal;