import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';
import DialogManager from './DialogManager';
import toggleVisible from './toggleVisible';

const dialogManager = new DialogManager();
const toastManager = new DialogManager();

const noop = ()=>{};

function isPromise(object){
  if(Promise && Promise.resolve){
    return Promise.resolve(object) == object;
  }else{
    throw "Promise not supported in your environment"
  }
}

const wrapCallback = (func = noop, bindCall) => {
  return (...args) => {
    const triggered = func(...args);
    if(isPromise(triggered)){
      triggered.then(() => bindCall(...args));
    }else{
      bindCall(...args);
    }
  }
}
/**
 * Dialog.alert
 */
Dialog.alert = function DialogAlert ({ 
  title, 
  text, 
  onOk, 
  okText = '确定',
  ...rest
}) {
  const container = document.createElement('div');
  const toggleAlert = toggleVisible((visible, clearQueue)=> {
    ReactDOM.render(
      <Dialog 
        {...rest}
        visible={visible}
        title={title}
        text={text}
        afterClose={clearQueue}
        actions={[
          {
            text: okText,
            primary: true,
            onClick: wrapCallback(onOk, toggleAlert)
          }
        ]}
      />,
      container
    )
  });
  
  dialogManager.run(
    (clearQueue)=> toggleAlert(clearQueue)
  );
}
/**
 * Dialog.confirm
 */
Dialog.confirm = function DialogConfirm({ 
  title, 
  text, 
  onOk, 
  okText = '确定', 
  onCancel, 
  cancelText = "取消",
  ...rest
}) {
  const container = document.createElement('div');
  const toggleConfirm = toggleVisible((visible, clearQueue)=> {
    ReactDOM.render(
      <Dialog 
        {...rest}
        visible={visible}
        title={title}
        text={text}
        afterClose={clearQueue}
        actions={[
          {
            text: cancelText,
            onClick: wrapCallback(onCancel, toggleConfirm)
          },
          {
            text: okText,
            primary: true,
            onClick: wrapCallback(onOk, toggleConfirm)
          }
        ]}
      />,
      container
    )
  });

  dialogManager.run(
    (clearQueue)=> toggleConfirm(clearQueue)
  );
}
/**
 * 
 */
Dialog.toast = function DialogToast(text, callback) {
  const container = document.createElement('div');
  callback = typeof callback === 'function' ? callback : noop;
  const toggleToast = toggleVisible((visible, clearQueue)=> {
    ReactDOM.render(
      <Dialog   
        toast
        text={text}
        visible={visible}
        afterClose={clearQueue}
      />,
      container
    )
  });

  toastManager.run(
    (clearQueue)=> {
      toggleToast(clearQueue);

      setTimeout(()=>{
        toggleToast(clearQueue);
        callback();
      }, 1000);
    }
  );
}
/**
 * Custom Dialog
 */
Dialog.custom = function DialogCustom (props){
  const {actions = [], ...rest } = props;
  const container = document.createElement('div');
  const toggleConfirm = toggleVisible((visible, clearQueue)=> {
    ReactDOM.render(
      <Dialog 
        {...rest}
        visible={visible}
        afterClose={clearQueue}
        actions={actions.map((action)=>{
          const { onClick, ...otherOpts} = action;
          return {
            ...otherOpts,
            onClick: wrapCallback(onClick, toggleConfirm)
          }
        })}
      />,
      container
    )
  });

  dialogManager.run(
    (clearQueue)=> toggleConfirm(clearQueue)
  );
}