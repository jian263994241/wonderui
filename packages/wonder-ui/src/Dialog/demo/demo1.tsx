/**
 * title: 基本使用
 * desc: 使用 buttons 定义按钮
 *
 */
import {
  Button,
  Container,
  Dialog,
  Page,
  Space,
  WhiteSpace
} from '@wonder-ui/core';

export default () => (
  <Page title="Dialog">
    <WhiteSpace />
    <Container>
      <Space>
        <Dialog
          title="标题"
          text="内容, 内容, 内容..."
          buttons={[
            {
              text: '取消'
            },
            {
              text: '好的',
              primary: true
            }
          ]}
        >
          <Button variant="contained">提示框(文字)</Button>
        </Dialog>
        <Dialog
          title="标题"
          content={
            <div>
              <img
                src="https://img.99bill.com/z/img/new-pos.png"
                width={260}
                height={260}
                alt="img"
              />
            </div>
          }
          buttons={[
            {
              text: '知道啦!',
              primary: true
            }
          ]}
        >
          <Button variant="contained">提示框(图片)</Button>
        </Dialog>
      </Space>
    </Container>
  </Page>
);
