import React, {Component, createElement} from 'react';
import {Page, PageContent, Link} from '../../src/CreateApp';
import Preloader, {showPreloader, hidePreloader} from '../../src/Preloader';
import Button, {ButtonsRow} from '../../src/Button';
import {GridRow, GridCol} from '../../src/Grid';

export default class Welcome extends Component {

  onRefresh = (scroller)=>{
    setTimeout(()=>{
      scroller.finishPullToRefresh()
    }, 2000)
  }

  preloader = ()=>{
    showPreloader();

    setTimeout(()=>{
      hidePreloader();
    }, 2000)
  }

  render() {

    return (
      <Page>
        <PageContent pullToRefresh onRefresh={this.onRefresh}>
          <GridRow gutter={15}>
            <GridCol width={33}>
              <Button fill to="/citys">省市区选择器</Button>
            </GridCol>
            <GridCol width={33}>
              <Button fill to="/citys">省市区选择器</Button>
            </GridCol>
            <GridCol width={33}>
              <Button fill to="/citys">省市区选择器</Button>
            </GridCol>
          </GridRow>

          <ButtonsRow round>
            <Button  as={Link} to="/citys">省市区选择器</Button>
            <Button active to="/citys">省市区选择器</Button>
            <Button to="/citys">省市区选择器</Button>
          </ButtonsRow>

          <ul>
            <li><Link to="/citys">省市区选择器</Link></li>
            <li><Link to="/picker">时间选择器</Link></li>
            <li><Link to="/countdown">短信倒计时</Link></li>
            <li><Link to="/keyboard">键盘</Link></li>
            <li><Link to="/popup">弹窗</Link></li>
            <li><Link to="/dialog">对话</Link></li>
            <li><a onClick={this.preloader}>指示器</a></li>
            <li><Link to="/accordion">折叠面板</Link></li>
            <li><Link to="/buttons">按钮</Link></li>
            <li><Link to="/tabs">Tabs</Link></li>
          </ul>
        </PageContent>
      </Page>
    )
  }
}
