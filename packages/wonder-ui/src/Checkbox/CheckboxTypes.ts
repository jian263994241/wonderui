import * as React from 'react';
import type { CheckboxClassesType } from './CheckboxClasses';

export interface CheckboxProps {
  className?: string;
  classes?: Partial<CheckboxClassesType>;
  style?: React.CSSProperties;
  name?: string;
  /**
   * 是否渲染为块级元素
   */
  block?: boolean;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 选中
   */
  checked?: boolean;
  /**
   * 默认选中
   */
  defaultChecked?: boolean;
  /**
   * 失效状态
   */
  disabled?: boolean;
  /**
   * 自定义Icon
   */
  icon?: (checked: boolean, indeterminate: boolean) => React.ReactNode;
  /**
   * @description 设置中间状态，只负责样式控制
   */
  indeterminate?: boolean;
  /**
   * input 元素的 id，常用来配合 label 使用
   */
  id?: string;
  /**
   * 变化时回调函数
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * 携带的标识值，用于 Group 模式
   */
  value?: any;
}

export interface CheckboxStyleProps extends CheckboxProps {}