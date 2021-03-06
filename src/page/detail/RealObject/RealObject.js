import React, {
  memo, Fragment
} from 'react'
import {
  TitleContext,
  DetailMiddle,
} from '../common.js'
import { Descriptions } from 'antd';
import CarouselContainer from 'component/carousel-container'
import MUtil from 'util/mm.js';
const _mm = new MUtil();

export default memo(function RealObject(props) {
  const { data } = props;
  const { organizationName, realObjectDetail:{name,description, images, createTime,createTimeType, source,nameHistory, relatedPeople,audios,videos}} = data;

  return (
    <Fragment>
      <DetailMiddle>
        <TitleContext>{name}</TitleContext>
        <Descriptions layout="horizontal" column={1} style={{ width: 800 }}>
          {organizationName ? <Descriptions.Item label="所属社团">{organizationName}</Descriptions.Item> : ''}
          {nameHistory ? <Descriptions.Item label="名称沿革">{nameHistory}</Descriptions.Item> : ''}

          {createTime ? <Descriptions.Item label="创建日期">{_mm.configTime(createTime, createTimeType)}</Descriptions.Item> : ''}
          {source ? <Descriptions.Item label="来源">{source}</Descriptions.Item> : ''}
          {/* { relatedPeople.length?<Descriptions.Item label="相关人物">{ relatedPeople.map((item) =>( (item.peopleName)+' : '+(item.description) + ' ; '))}</Descriptions.Item>: ''} */}
          { relatedPeople.length?<Descriptions.Item label="相关人物">{ relatedPeople.map((item) =>( (item.peopleName)+' '))}</Descriptions.Item>: ''}
          {description ? <Descriptions.Item label="实物描述">{description}</Descriptions.Item> : ''}
        </Descriptions>
        {images.length ? <CarouselContainer title={'图片'} data={images} /> : <span />}
        {audios?audios.length?<CarouselContainer title={'音频'} data={audios} />:<span/>:''}
        {videos?videos.length?<CarouselContainer title={'视频'} data={videos} />:<span/>:''}
      </DetailMiddle>
    </Fragment>
  )
})
