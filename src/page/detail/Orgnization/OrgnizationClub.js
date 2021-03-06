import React, {
  memo, Fragment,
  useRef,
  useCallback
} from 'react'
import { Link } from 'react-router-dom';
import {
  TitleContext,
  DetailLeftTop,
  CarouselRightTop,
  DetailMiddle,
  ParaContext,
  CarouselLeft,
  CarouselRight
} from './style.js'
import {
  ACTIVITY_TOPIC,
  REALOBJECT_TOPIC,
  LITERATURE_TOPIC,
  HISTORICALINDEX_TOPIC,
  JOURNAL_TOPIC,
  PEOPLE_TOPIC
} from 'util/constants'
import { Descriptions, Carousel, Tabs, Icon } from 'antd';
import CarouselContainer from 'component/carousel-container'
import MUtil from 'util/mm.js';
import {DoubleLeftOutlined,DoubleRightOutlined} from "@ant-design/icons"

const _mm = new MUtil();

const { TabPane } = Tabs;
const Arrow = ({ type, style, className, onClick }) => (
  <Icon type={type} style={style} className={className} onClick={onClick} />
);
export default memo(function OrgnizationClub(props) {
  const { data } = props;
  const ref1 = useRef();
  const { organization: { name, nameHistory, startTime, startTimeType, place, creator, leader, secretariat, member, relatedPeople, logoUrl }, activities,
    constitutions, historicalDataIndexs, journals, literatures, realObjects } = data;
  let imagesList = [];
  constitutions.map((item) => {
    item.images.map((images) => {
      imagesList = imagesList.concat([images.url]);
    })
  })
  if (logoUrl) {
    imagesList = imagesList.concat([logoUrl]);
  }

  const toPrev = useCallback(
    () => {
      ref1.current.prev();
    },
  );

  const toNext = useCallback(
    () => {
      ref1.current.next();
    },
  );

  return (
    <Fragment>
      <DetailLeftTop>
        <TitleContext>{name}</TitleContext>
        <Descriptions layout="horizontal" column={1} style={{ width: 580 }}>
          {creator ? <Descriptions.Item label="发起人">{creator}</Descriptions.Item> : ''}
          {startTime ? <Descriptions.Item label="创办时间">{_mm.configTime(startTime, startTimeType)}</Descriptions.Item> : ''}
          {place ? <Descriptions.Item label="创办地点">{place}</Descriptions.Item> : ''}
          {nameHistory ? <Descriptions.Item label="改名历史">{nameHistory}</Descriptions.Item> : ''}
          {leader ? <Descriptions.Item label="理事会成员">{leader}</Descriptions.Item> : ''}
          {secretariat ? <Descriptions.Item label="秘书处">{secretariat}</Descriptions.Item> : ''}
          {member ? <Descriptions.Item label="会员">{member}</Descriptions.Item> : ''}
        </Descriptions>
        <CarouselRightTop>
          <CarouselLeft onClick={toPrev}><DoubleLeftOutlined width="20" /> </CarouselLeft>
          <Carousel 
            autoplay
            arrows
            ref={ref1}
            prevArrow={<Arrow type="left" />}
            nextArrow={<Arrow type="right" />}
          >
            {
              imagesList.length ? imagesList.map((item, index) => (
                <a href={item} target="_blank" rel="noopener noreferrer">
                  <img src={item} key={index} />
                </a>
              )) : ''
            }
          </Carousel>
          <CarouselRight onClick={toNext}><DoubleRightOutlined /> </CarouselRight>
          {/* {imagesList.length ? <CarouselContainer title={'图片'} data={imagesList} /> : <span />} */}
        </CarouselRightTop>
      </DetailLeftTop>
      <DetailMiddle>
        <Tabs defaultActiveKey="huodong">
          <TabPane tab="社团活动" key="huodong" >
            {
              activities.length ? activities.map((item, index) => (
                <ParaContext key={item.id} >
                  <Link to={`/detail?id=${item.id}&theme=${ACTIVITY_TOPIC}`}
                    target="_blank"
                  >{`${index + 1}${_mm.getDot(item.name)}${item.name}`}</Link>
                </ParaContext>
              )) : <ParaContext>暂无</ParaContext>
            }
          </TabPane>
          <TabPane tab="社团刊物" key="kanwu" >
            {
              journals.length ? journals.map((item, index) => (
                <ParaContext key={item.id} >
                  <Link to={`/detail?id=${item.id}&theme=${JOURNAL_TOPIC}`}
                    target="_blank"
                  >{`${index + 1}${_mm.getDot(item.name)}${item.name}`}</Link>
                </ParaContext>
              )) : <ParaContext>暂无</ParaContext>
            }
          </TabPane>
          <TabPane tab="相关实物" key="shiwu" >
            {
              realObjects.length ? realObjects.map((item, index) => (
                <ParaContext key={item.id} >
                  <Link to={`/detail?id=${item.id}&theme=${REALOBJECT_TOPIC}`}
                    target="_blank"
                  >{`${index + 1}${_mm.getDot(item.name)}${item.name}`}</Link>
                </ParaContext>
              )) : <ParaContext>暂无</ParaContext>
            }
          </TabPane>
          <TabPane tab="相关人物" key="renwu" >
            {
              relatedPeople.length ? relatedPeople.map((item, index) => (
                <ParaContext key={item.id}>
                  <Link to={`/detail?id=${item.peopleId}&theme=${PEOPLE_TOPIC}`}
                    target="_blank"
                  >{`${index + 1}${_mm.getDot(item.peopleName)}${item.peopleName}`}
                  </Link>
                  {item.relationDescription ? ` , ${item.relationDescription}` : ''}
                </ParaContext>
              )) : <ParaContext>暂无</ParaContext>
            }
          </TabPane>
          <TabPane tab="相关文献" key="wenxian" >
            {
              literatures.length ? literatures.map((item, index) => (
                <ParaContext key={item.id}>
                  <Link to={`/detail?id=${item.id}&theme=${LITERATURE_TOPIC}`}
                    target="_blank"
                  >{`${index + 1}${_mm.getDot(item.name)}${item.name}`}</Link>
                </ParaContext>
              )) : <ParaContext>暂无</ParaContext>
            }
          </TabPane>
          <TabPane tab="史料索引" key="suoyin" >
            {
              historicalDataIndexs.length ? historicalDataIndexs.map((item, index) => (
                <ParaContext key={item.id} >
                  <Link to={`/detail?id=${item.id}&theme=${HISTORICALINDEX_TOPIC}`}
                    target="_blank"
                  >{`${index + 1}${_mm.getDot(item.name)}${item.name}`}</Link>
                </ParaContext>
              )) : <ParaContext>暂无</ParaContext>
            }
          </TabPane>
        </Tabs>
      </DetailMiddle>
      {/* <DetailMiddle>
          <LevelTwoTiTle>
            <h2>社团活动</h2>
          </LevelTwoTiTle>{
            academicActivity.length ?
            <CardActivity activityInfo={academicActivity}  activityType="学术活动" activeName="academicActivityName"/>: ''
          }{
            scienceActivity.length ?
            <CardActivity activityInfo={scienceActivity}  activityType="科普活动" activeName="scienceActivityName"/>: ''
          }{
            industrialActivity.length ?
            <CardActivity activityInfo={industrialActivity}  activityType="实业活动" activeName="industrialActivityName"/>: ''
          }{
            otherActivity.length ?
            <CardActivity activityInfo={otherActivity}  activityType="其他活动" activeName="otherActivityName"/>: ''
          }



          <LevelTwoTiTle>
            <h2>社团出版刊物</h2>
          </LevelTwoTiTle>
          {
            journal.length ?  journal.map((item, index )=>(
              <ParaContext className='list'>
                {item.jname}
                {item.namehistory?`，${item.namehistory}`:''}
                {item.stime?`，${moment(item.stime).format('YYYY-MM-DD')}`:''}
                {item.etime?`，${moment(item.etime).format('YYYY-MM-DD')}`:''}
              </ParaContext> 
            ) ):''

          }
        

          <LevelTwoTiTle>
            <h2>社团史料</h2>
          </LevelTwoTiTle>
          <LevelThirdTitle>
            <h3>实物史料</h3>
          </LevelThirdTitle>
          <ParaContext className='list'>
            实物史料,实物史料2
          </ParaContext>
          <LevelThirdTitle>
            <h3>书信史料</h3>
          </LevelThirdTitle>
          <ParaContext className='list'>
            书信活动1,书信活动2
          </ParaContext>
          <LevelThirdTitle>
            <h3>章程</h3>
          </LevelThirdTitle>
          <ParaContext className='list'>
            章程内容
          </ParaContext>
          <LevelThirdTitle>
            <h3>媒体资源</h3>
          </LevelThirdTitle>
          <ParaContext className='list'>
            媒体资源1,媒体资源2
          </ParaContext>






          <LevelTwoTiTle>
            <h2>社团文献与索引</h2>
          </LevelTwoTiTle>
          <DetailTab>
          <Tabs defaultActiveKey="1">
            <TabPane tab="原始文献" key="1">
            {
              primitiveLiterature.length ?  primitiveLiterature.map((item, index )=>(
                <ParaContext  >
                  {`${index+1}.${item.primitiveLiteratureName}`}
                  {item.source?`，${item.source}`:''}
                  {item.stime?`，${moment(item.stime).format('YYYY-MM-DD')}`:''}
                  {item.etime?`，${moment(item.etime).format('YYYY-MM-DD')}`:''}                
                </ParaContext> 
              ) ):''
            }             
            </TabPane>
            <TabPane tab="研究文献" key="2">
            {
              researchLiterature.length ?  researchLiterature.map((item, index )=>(
                <ParaContext  >
                  {`${index+1}.${item.researchLiteratureName}`}
                  {item.source?`，${item.source}`:''}
                  {item.stime?`，${moment(item.stime).format('YYYY-MM-DD')}`:''}
                  {item.etime?`，${moment(item.etime).format('YYYY-MM-DD')}`:''}  
                </ParaContext> 
              ) ):''
            }             </TabPane>
            <TabPane tab="史料索引" key="3">
            {
              historicalDataIndex.length ?  historicalDataIndex.map((item, index )=>(
                <ParaContext  >
                  {`${index+1}.${item.jname}`}
                </ParaContext> 
              ) ):''
            }            
          </TabPane>
          </Tabs>
          </DetailTab>
        </DetailMiddle> */}

    </Fragment>

  )
})
