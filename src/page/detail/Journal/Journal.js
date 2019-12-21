import React, {
  memo, Fragment
} from 'react'
import {
  TitleContext,
  DetailMiddle,
} from '../common.js'
import { Descriptions } from 'antd';
import CarouselContainer from 'component/carousel-container'

export default memo(function Journal(props) {
  const { data } = props;
  const { name, organizationName, description, images, startTime,endTime,nameHistory, relatedPeople} = data;

  return (
    <Fragment>
      <DetailMiddle>
        <TitleContext>{name}</TitleContext>
        <Descriptions layout="horizontal" column={1} style={{ width: 500 }}>
          {organizationName ? <Descriptions.Item label="相关社团名称">{organizationName}</Descriptions.Item> : ''}
          {nameHistory ? <Descriptions.Item label="名称沿革">{nameHistory}</Descriptions.Item> : ''}

          {startTime ? <Descriptions.Item label="创刊日期">{startTime}</Descriptions.Item> : ''}
          {endTime ? <Descriptions.Item label="结刊日期">{endTime}</Descriptions.Item> : ''}

          { relatedPeople.length?<Descriptions.Item label="相关人物">{ relatedPeople.map((item, index) =>( (item.peopleName)+' : '+(item.description) + ' ; '))}</Descriptions.Item>: ''}

          {description ? <Descriptions.Item label="期刊描述">{description}</Descriptions.Item> : ''}
        </Descriptions>
        {images.length ? <CarouselContainer title={'图片'} data={images} /> : <span />}
      </DetailMiddle>
    </Fragment>
  )
})
