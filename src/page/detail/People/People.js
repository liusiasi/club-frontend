import React, {
  memo, Fragment
} from 'react'
import {
  TitleContext,
  DetailMiddle,
} from '../common.js'
import { Descriptions, Tabs } from 'antd';
import CarouselContainer from 'component/carousel-container'
const { TabPane } = Tabs;

export default memo(function People(props) {
  const { data } = props;
  const { name, organizationName, description, images, startTime, endTime, nameHistory, relatedPeople } = data;

  return (
    <Fragment>
      <DetailMiddle>
        <Tabs defaultActiveKey="shengping">
          <TabPane  tab="人物生平" key="shengping" >
            人物生平
            <TitleContext>{name}</TitleContext>
          </TabPane>
          <TabPane  tab="学术著述" key="zhushu" >
            学术著述
          </TabPane>
          <TabPane  tab="流光影年" key="影年" >
            流光影年
          </TabPane>

        </Tabs>
      </DetailMiddle>
    </Fragment>
  )
})
