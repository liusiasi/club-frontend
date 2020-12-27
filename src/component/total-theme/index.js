import React, { Component, Fragment } from 'react';
import {
    ContainsNumber,
} from './style.js'
class TotalTheme extends Component {

  render() {
    //收录 theme 主题的数据 totalNumber条
    const {  totalNumber,theme } = this.props;
    return (
      <div>
          <ContainsNumber className='title'>中国近现代科技社团</ContainsNumber>
          <ContainsNumber className='nums'>收录了{totalNumber}条{theme}信息</ContainsNumber>
      </div>
    )
  }
}

export default TotalTheme;
