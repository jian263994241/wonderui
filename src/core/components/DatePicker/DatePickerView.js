import React from 'react';
import PropTypes from 'prop-types';
import { 
  WUI_picker, 
  WUI_picker_header, 
  WUI_picker_header_button,
  WUI_picker_header_title,
  WUI_picker_cascader
} from '../Picker/styles';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import defaultLocale from 'rmc-date-picker/lib/locale/zh_CN';
import useEventCallback from '../../utils/useEventCallback';

const WUI_picker_date_picker = WUI_picker_cascader.withComponent(RCDatePicker);

const DatePickView = React.forwardRef((props, ref)=>{
  const {
    cancelText = '取消',
    okText = '确定',
    title,
    onChange,
    onDateChange,
    value: inValue,
    onOk,
    onCancel,
    visible = false,
    defaultValue = new Date(),
    locale = defaultLocale,
    ...mDatePickerProps
  } = props;
  
  const [value, setValue] = React.useState(inValue || defaultValue);

  React.useEffect(()=>{
    setValue(inValue);
  }, [inValue]);

  const dataPickerView = (
    <WUI_picker_date_picker 
      onDateChange={handleChange}
      date={value}
      locale={locale}
      ref={ref}
      {...mDatePickerProps}
    />
  );

  const handleChange = useEventCallback((val)=>{
    setValue(val);
    onDateChange && onDateChange(val);
  });

  const handleOk = useEventCallback(()=>{
    onChange && onChange(value);
    onOk && onOk(value);
  });

  return (
    <WUI_picker visible={visible} anchor="bottom" onCancel={onCancel} ref={ref}>
      <WUI_picker_header>
        <WUI_picker_header_button onClick={onCancel}>{cancelText}</WUI_picker_header_button>
        <WUI_picker_header_title>{title}</WUI_picker_header_title>
        <WUI_picker_header_button onClick={handleOk}>{okText}</WUI_picker_header_button>
      </WUI_picker_header>
      {dataPickerView}
    </WUI_picker>
  )
});

DatePickView.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
}

export default DatePickView;