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

export default memo(function Journal(props) {
  const { data } = props;
  const { name, organizationName, description, images, startTime, startTimeType, endTime, endTimeType, nameHistory, relatedPeople} = data;

  return (
    <Fragment>
      <DetailMiddle>
        <TitleContext>{name}</TitleContext>
        <Descriptions layout="horizontal" column={1} style={{ width: 800 }}>
          {organizationName ? <Descriptions.Item label="所属社团">{organizationName}</Descriptions.Item> : ''}
          {nameHistory ? <Descriptions.Item label="名称沿革">{nameHistory}</Descriptions.Item> : ''}

          {startTime ? <Descriptions.Item label="创刊日期">{_mm.configTime(startTime,startTimeType)}</Descriptions.Item> : ''}
          {endTimeType ? <Descriptions.Item label="结刊日期">{endTimeType == 5 ?'至今': _mm.configTime(endTime,endTimeType)}</Descriptions.Item> : ''}

          { relatedPeople.length?<Descriptions.Item label="相关人物">{ relatedPeople.map((item) =>( (item.peopleName)+' '))}</Descriptions.Item>: ''}

          {description ? <Descriptions.Item label="期刊描述">{description}</Descriptions.Item> : ''}
        </Descriptions>
        {images.length ? <CarouselContainer title={'图片'} data={images} /> : <span />}
      </DetailMiddle>
    </Fragment>
  )
})
