import React, { Component, Fragment } from 'react';
import {
  LevelThirdTitle,
  ParaContext
} from './style.js'
class CardActivity extends Component {
  constructor(props){
    super(props);
    this.state = {
      activityInfo: [],
    }
  }

  render() {
    //activityInfo: 活动内容，activityType：活动类型，activeName：活动名称。生成活动内容模板，包括活动名称，活动内容，开始日期，结束日期
    const {  activityInfo,activityType,activeName } = this.props;
    return (
      <Fragment>
        <LevelThirdTitle>
          <h3>{activityType}</h3>
        </LevelThirdTitle>{
          activityInfo.map((item, index ) => (
            <Fragment key={index}>
              <ParaContext>
                ●  活动名称：{item[activeName]}，{item.content?`活动内容：${item.content}`:''}
                {item.stime?`，开始日期：${item.stime}`:''}{item.stime?`，开始日期：${item.etime}`:''}
              </ParaContext>
            </Fragment>
          ))
          
        }
      </Fragment>
    )
  }
}

export default CardActivity;
