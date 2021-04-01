import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import Portal, { getContainer, Container } from '../Portal/Portal';
import ModalManager, { ariaHidden, Modal as ModalType } from './ModalManager';
import { ownerDocument, createChainedFunction } from '@wonder-ui/utils';
import { useForkRef, useEventCallback } from '@wonder-ui/hooks';
import Backdrop, { BackdropProps } from '../Backdrop';
import FocusLock, { AutoFocusInside } from 'react-focus-lock';
import { ReactFocusLockProps } from 'react-focus-lock/interfaces';
import { InProps } from '../styles/types';

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const defaultManager = new ModalManager();

function getHasTransition(props: React.PropsWithChildren<any>) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
}

const ModalRoot = styled('div', {
  name: 'WuiModal',
  slot: 'Root'
})(({ theme }) => ({
  position: 'fixed',
  zIndex: theme.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}));

export interface ModalProps {
  /**
   * @description Backdrop Props
   * @default {}
   */
  BackdropProps?: BackdropProps;
  /**
   * @description 子节点
   */
  children: React.ReactElement;
  /**
   * @description Root element
   * @default div
   */
  component?: keyof React.ReactHTML | React.ComponentType;
  /**
   * @description 容器 HTMLElement
   */
  container?: Container;
  /**
   * @description 过渡后关闭
   * @default false
   */
  closeAfterTransition?: boolean;
  /**
   * @description 禁用AutoFocus
   * @default false
   */
  disableAutoFocus?: boolean;
  /**
   * @description 禁用esc按键执行关闭
   * @default false
   */
  disableEscapeKeyDown?: boolean;
  /**
   * @description 禁用FocusLock
   * @default false
   */
  disableFocusLock?: boolean;
  /**
   * @description 禁用 Portal
   * @default false
   */
  disablePortal?: boolean;
  /**
   * @description 禁用滚动锁
   * @default false
   */
  disableScrollLock?: boolean;
  /**
   * @description FocusLock Props
   * @default {}
   */
  FocusLockProps?: ReactFocusLockProps;
  /**
   * @description 隐藏Backdrop
   * @default false
   */
  hideBackdrop?: boolean;
  /**
   * @description 保持Modal节点
   * @default false
   */
  keepMounted?: boolean;
  /**
   * @ignore
   * @description Modal manager
   */
  manager?: InstanceType<typeof ModalManager>;
  /**
   * @description 背景板点击事件
   */
  onBackdropClick?: (event: React.MouseEvent) => void;
  /**
   * @description Modal关闭事件
   */
  onClose?: <T extends 'backdropClick' | 'escapeKeyDown'>(
    event: T extends 'escapeKeyDown' ? React.KeyboardEvent : React.MouseEvent,
    type: T
  ) => void;
  /**
   * @description esc键盘事件
   */
  onKeyDown?: (event: React.KeyboardEvent) => void;
  /**
   * @description 过渡动画事件
   */
  onTransitionEnter?: () => void;
  /**
   * @description 过渡动画事件
   */
  onTransitionExited?: () => void;
  /**
   * @description 是否显示
   * @default false
   */
  visible?: boolean;
}

export default function Modal<P extends InProps<ModalProps>>(inProps: P) {
  const props = useThemeProps({ props: inProps, name: 'WuiModal' });
  const {
    BackdropProps,
    children,
    className,
    closeAfterTransition,
    component,
    container,
    disableAutoFocus = false,
    disableEscapeKeyDown = false,
    disableFocusLock = false,
    disablePortal = false,
    disableScrollLock = false,
    FocusLockProps,
    hideBackdrop = false,
    keepMounted,
    manager = defaultManager,
    onBackdropClick,
    onClose,
    onKeyDown,
    onTransitionEnter,
    onTransitionExited,
    visible = false,
    rootRef,
    ...rest
  } = props;

  const [exited, setExited] = React.useState(true);
  const modal = React.useRef<{
    modalRef?: Element | null;
    mount?: Element | null;
  }>({});
  const mountNodeRef = React.useRef(null);
  const modalRef = React.useRef<Element | null>(null);
  const handleRef = useForkRef(modalRef, rootRef);
  const hasTransition = getHasTransition(props);

  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current as ModalType;
  };

  const handleMounted = () => {
    manager.mount(getModal(), { disableScrollLock });

    // Fix a bug on Chrome where the scroll isn't initially 0.
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };

  const isTopModal = React.useCallback(() => manager.isTopModal(getModal()), [
    manager
  ]);

  const handlePortalRef = useEventCallback((node) => {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (visible && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, true);
    }
  });

  const handleOpen = useEventCallback(() => {
    const resolvedContainer = (getContainer(container) ||
      getDoc().body) as HTMLElement;

    manager.add(getModal(), resolvedContainer);

    // The element was already mounted.
    if (modalRef.current) {
      handleMounted();
    }
  });

  const handleClose = React.useCallback(() => {
    manager.remove(getModal());
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

  const handleEnter = () => {
    setExited(false);

    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };

  const handleExited = () => {
    setExited(true);

    if (onTransitionExited) {
      onTransitionExited();
    }

    if (closeAfterTransition) {
      handleClose();
    }
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onKeyDown) {
      onKeyDown(event);
    }

    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  const childProps: any = {};

  const { tabIndex = '-1', onEnter, onExited } = children as any;

  childProps.tabIndex = tabIndex;

  if (hasTransition) {
    childProps.onEnter = createChainedFunction(handleEnter, onEnter);
    childProps.onExited = createChainedFunction(handleExited, onExited);
  }

  const styleProps = { visible };

  const classes = useClasses({ ...props, styleProps, name: 'WuiModal' });

  return (
    <Portal
      disablePortal={disablePortal}
      container={container}
      ref={handlePortalRef}
    >
      <ModalRoot
        role="presentation"
        onKeyDown={handleKeyDown}
        ref={handleRef}
        className={classes.root}
        as={component}
        {...rest}
      >
        {!hideBackdrop && (
          <Backdrop
            visible={visible}
            onClick={handleBackdropClick}
            {...BackdropProps}
          />
        )}
        <FocusLock
          disabled={disableFocusLock}
          autoFocus={!disableAutoFocus}
          {...FocusLockProps}
        >
          <AutoFocusInside disabled={disableAutoFocus}>
            {React.cloneElement(children, childProps)}
          </AutoFocusInside>
        </FocusLock>
      </ModalRoot>
    </Portal>
  );
}