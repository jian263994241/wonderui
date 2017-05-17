import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class FormLabel extends Component {

  static uiName = 'FormLabel'

  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {
      className,
      children,
      ...other
    } = this.props;

    const cls = classnames('item-title', 'label', className)

    return (
      <div className={cls} {...other} ref="FormLabel">
        {children}
      </div>
    );
  }
}


export class FormInput extends Component {

  static uiName = 'FormInput'

  focus = ()=>{
    this.refs.input.focus();
  }

  val = (value)=>{
    if(value){
      this.refs.input.value = value;
    }
    return this.refs.input.value;
  }

  render() {

    const {type, value, ...other} = this.props;

    let ele;

    switch (type) {
      case 'select':
        ele = <select {...other} type={type} defaultValue={value} {...other}/>
        break;
      case 'switch':
        ele = <Switch {...other} type={type} value={value} {...other}/>
        break;
      case 'range':
        ele = <Range {...other} type={type} value={value} {...other}/>
        break;
      case 'textarea':
        ele = <textarea {...other} type={type} defaultValue={value} ref="input" {...other}/>
        break;
      default:
        ele = <input {...other} type={type} defaultValue={value} ref="input" {...other}/>
    }
    return (
      <div className="item-input" ref="FormInput">
        {ele}
      </div>
    );
  }
}

export class Switch extends Component {

  static uiName = 'Switch'

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    const {
      className,
      style,
      type,
      checked,
      ...other
    } = this.props;

    const cls = classnames('label-switch', className);
    return (
      <label className={cls} style={style} ref="Switch">
        <input type="checkbox" {...other} defaultChecked={checked}/>
        <div className="checkbox"></div>
      </label>
    );
  }
}

export class Range extends Component {

  static uiName = 'Range'

  render() {

    const {
      value,
      ...other
    } = this.props;

    return (
      <div className="range-slider" ref="Range">
        <input {...other} defaultValue={value}/>
      </div>
    );
  }
}
