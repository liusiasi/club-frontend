import React, {
  memo, Fragment
} from 'react'
import { Link } from 'react-router-dom';
import {
  DetailMiddle,
} from '../common.js'
import {
  DetailInfo,
  ParaSection,
  ParaContext
} from './style.js'
import {  Tabs } from 'antd';
import CarouselContainer from 'component/carousel-container'
import {
  ACTIVITY_TOPIC,
  REALOBJECT_TOPIC,
  LITERATURE_TOPIC,
  JOURNAL_TOPIC,
  ORGANIZATION_TOPIC,
  IMAGE_TOPIC,
  VIDEO_TOPIC,
  AUDIO_TOPIC
} from 'util/constants'
const { TabPane } = Tabs;

import MUtil from 'util/mm.js';
const _mm = new MUtil();

export default memo(function People(props) {
  const { data } = props;
  const { 
    logoUrl,
    peopleName,
    organizations,
    activities,
    journals,
    realObjects,
    literatures,
    images,
    audios, 
    videos } = data;

  return (
    <Fragment>
      <DetailMiddle>
        <DetailInfo>
          <img src={logoUrl} /><h1>{peopleName}</h1>
        </DetailInfo>
        <Tabs defaultActiveKey="shengping">
          <TabPane tab="人物生平" key="shengping" >
            {/* 所属社团信息 */}
            {organizations.length ? <ParaSection>
              <p>所属社团</p>
              {
                organizations.map((item, index) => {
                  const { id, name, startTime, startTimeType, creator, leader, secretariat, member } = item
                  return <ParaContext key={id} >
                    {`${index + 1}${_mm.getDot(name)}`}
                    <Link to={`/detail?id=${id}&theme=${ORGANIZATION_TOPIC}`}
                      target="_blank"
                    >{`${name}`}</Link>
                    {/* {startTime ? `创办时间：${_mm.configTime(startTime,startTimeType)}，` : ""}
                    {creator ? `发起人： ${creator}，` : ""}
                    {leader ? `理事会：${leader}，` : ""}
                    {secretariat ? `秘书处：${secretariat}，` : ""}
                    {member ? `会员：${member}，` : ""} */}
                  </ParaContext>
                })
              }
            </ParaSection> : <span />}
            {/* 相关活动信息 */}
            {activities.length ? <ParaSection>
              <p>相关活动</p>
              {
                activities.map((item, index) => {
                  const { id, name, startTime, startTimeType, relationDescription } = item
                  return <ParaContext key={id} >
                    {`${index + 1}${_mm.getDot(name)}`}
                    <Link to={`/detail?id=${id}&theme=${ACTIVITY_TOPIC}`}
                      target="_blank"
                    >{`${name}`}</Link>
                    {/* {startTime ? `活动时间：${_mm.configTime(startTime,startTimeType)}，` : ""}
                    {relationDescription ? `与人物的关系： ${relationDescription}，` : ""} */}
                  </ParaContext>
                })
              }
            </ParaSection> : <span />}

          </TabPane>
          <TabPane tab="学术著述" key="zhushu" >
            {/* 相关期刊 */}
            {journals.length ? <ParaSection>
              <p>相关期刊</p>
              {
                journals.map((item, index) => {
                  const { id, name, startTime, startTimeType, relationDescription } = item
                  return <ParaContext key={id} >
                    {`${index + 1}${_mm.getDot(name)}`}
                    <Link to={`/detail?id=${id}&theme=${JOURNAL_TOPIC}`}
                      target="_blank"
                    >{`${name}`}</Link>
                    {/* {startTime ? `发刊日期：${_mm.configTime(startTime,startTimeType)}，` : ""}
                    {relationDescription ? `与人物的关系： ${relationDescription}，` : ""} */}
                  </ParaContext>
                })
              }
            </ParaSection> : <span />}
            {/* 相关实物 */}
            {realObjects.length ? <ParaSection>
              <p>相关实物</p>
              {
                realObjects.map((item, index) => {
                  const { id, name, startTime, startTimeType, description,relationDescription } = item
                  return <ParaContext key={id} >
                    {`${index + 1}${_mm.getDot(name)}`}
                    <Link to={`/detail?id=${id}&theme=${REALOBJECT_TOPIC}`}
                      target="_blank"
                    >{`${name}`}</Link>
                    {/* {startTime ? `实物日期：${_mm.configTime(startTime,startTimeType)}，` : ""}
                    {description ? `实物描述：${description}，` : ""}
                    {relationDescription ? `与人物的关系： ${relationDescription}，` : ""} */}
                  </ParaContext>
                })
              }
            </ParaSection> : <span />}      
            {/* 相关文献 */}
            {literatures.length ? <ParaSection>
              <p>相关文献</p>
              {
                literatures.map((item, index) => {
                  const { id, name, startTime,startTimeType, relationDescription } = item
                  return <ParaContext key={id} >
                    {`${index + 1}${_mm.getDot(name)}`}
                    <Link to={`/detail?id=${id}&theme=${LITERATURE_TOPIC}`}
                      target="_blank"
                    >{`${name}`}</Link>
                    {/* {startTime ? `文献日期：${_mm.configTime(startTime,startTimeType)}，` : ""}
                    {relationDescription ? `与人物的关系： ${relationDescription}，` : ""} */}
                  </ParaContext>
                })
              }
            </ParaSection> : <span />}        
          </TabPane>
          <TabPane tab="流光影年" key="影年" >
          {images.length? <CarouselContainer title={IMAGE_TOPIC} data={images} />:<span/>}
          {audios.length?<CarouselContainer title={AUDIO_TOPIC} data={audios} />:<span/>}
          {videos.length?<CarouselContainer title={VIDEO_TOPIC} data={videos} />:<span/>}
          </TabPane>

        </Tabs>
      </DetailMiddle>
    </Fragment>
  )
})
