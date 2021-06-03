/**
 * title: 预设宽度
 * desc: 使用`cols={number}`您可以为列赋予其`1~12`预设宽度
 */

/** @jsx jsx */
import { jsx, Row, Col, styled } from '@wonder-ui/core';

const Block = styled('div', { target: 'demo-block' })({
  background: '#0092ff',
  padding: 16,
  color: '#fff',
  textAlign: 'center'
});

export default function Example() {
  return (
    <div
      css={{
        '.WuiCol-root:nth-of-type(odd) .demo-block': {
          background: '#0586e9'
        }
      }}
    >
      <Row rowCols={6}>
        <Col>
          <Block>1 of 4</Block>
        </Col>
        <Col>
          <Block>2 of 4</Block>
        </Col>
        <Col>
          <Block>3 of 4</Block>
        </Col>
        <Col>
          <Block>4 of 4</Block>
        </Col>
      </Row>
      <Row rowCols={3}>
        <Col>
          <Block>1 of 4</Block>
        </Col>
        <Col>
          <Block>2 of 4</Block>
        </Col>
        <Col>
          <Block>3 of 4</Block>
        </Col>
        <Col>
          <Block>4 of 4</Block>
        </Col>
      </Row>
    </div>
  );
}