import { Picker, PickerProps } from '@wonder-ui/core';

const props: PickerProps = {
  columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
  defaultIndex: 2
};

export default () => <Picker {...props} />;