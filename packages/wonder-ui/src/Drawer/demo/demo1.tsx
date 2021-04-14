/**
 * title: 基础使用
 * desc: 方向 `'down' | 'left' | 'right' | 'up'`
 */

/** @jsx jsx */
import {
  jsx,
  Button,
  Drawer,
  DrawerProps,
  Space,
  Typography,
  Divider,
  isHorizontal
} from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

type Anchor = DrawerProps['anchor'];

export default function Example() {
  const [visible, { toggle: toggleVisible }] = useToggle(false);
  const [anchor, { toggle }] = useToggle<Anchor>('left');

  const open = (anchor: Anchor) => {
    toggle(anchor);
    toggleVisible();
  };

  return (
    <div>
      <Space>
        <Button onClick={() => open('left')}>Left</Button>
        <Button onClick={() => open('right')}>Right</Button>
        <Button onClick={() => open('top')}>Top</Button>
        <Button onClick={() => open('bottom')}>Bottom</Button>
      </Space>

      <Drawer anchor={anchor} visible={visible} onClose={() => toggleVisible()}>
        <div style={{ width: isHorizontal(anchor) ? 300 : '100%' }}>
          <div style={{ padding: '10px 16px' }}>
            <Typography variant="subtitle1">Basic Drawer</Typography>
          </div>
          <Divider />
          <div style={{ padding: '10px 16px' }}>
            <Typography>
              Some contents... <br />
              Some contents... <br />
              Some contents...
            </Typography>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
