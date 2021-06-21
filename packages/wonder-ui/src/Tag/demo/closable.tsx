/**
 * title: 可关闭标签
 * desc: 通过添加 closable 变为可关闭标签。可关闭标签具有 onClose 事件
 */
import { Button, Space, Tag } from '@wonder-ui/core';
import { useSelections } from '@wonder-ui/hooks';
import { createArray } from '@wonder-ui/utils';

const tags = createArray(7, (index) => index);

export default function Example() {
  const { selected, toggle, selectAll } = useSelections(tags, tags);

  return (
    <Space direction="vertical">
      <Button variant="contained" onClick={selectAll}>
        Reset
      </Button>

      <Space>
        {selected.map((tag, index) => (
          <Tag closable key={index} onClose={() => toggle(tag)}>
            Tag {tag}
          </Tag>
        ))}
      </Space>
    </Space>
  );
}
