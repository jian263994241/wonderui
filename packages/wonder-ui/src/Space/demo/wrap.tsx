/**
 * title: 换行排列
 * desc: 可以设置水平和垂直方向的间距
 */
/** @jsx jsx */
import { Space, Button, jsx } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space wrap size={['small', 'large']}>
      {new Array(22).fill(null).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Button variant="contained" key={index}>
          Button
        </Button>
      ))}
    </Space>
  );
}
