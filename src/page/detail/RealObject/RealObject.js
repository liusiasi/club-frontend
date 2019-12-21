import React, {
  memo, Fragment
} from 'react'
import {
  TitleContext,
  DetailMiddle,
} from '../common.js'
import { Descriptions } from 'antd';
import CarouselContainer from 'component/carousel-container'

export default memo(function RealObject(props) {
  const { data } = props;
  const { organizationName, realObjectDetail:{name,description, images, createTime,source,nameHistory, relatedPeople}} = data;

  return (
    <Fragment>
      <DetailMiddle>
        <TitleContext>{name}</TitleContext>
        <Descriptions layout="horizontal" column={1} style={{ width: 500 }}>
          {organizationName ? <Descriptions.Item label="相关社团名称">{organizationName}</Descriptions.Item> : ''}
          {nameHistory ? <Descriptions.Item label="名称沿革">{nameHistory}</Descriptions.Item> : ''}

          {createTime ? <Descriptions.Item label="创建日期">{createTime}</Descriptions.Item> : ''}
          {source ? <Descriptions.Item label="来源">{source}</Descriptions.Item> : ''}
          { relatedPeople.length?<Descriptions.Item label="相关人物">{ relatedPeople.map((item, index) =>( (item.peopleName)+' : '+(item.description) + ' ; '))}</Descriptions.Item>: ''}
          {description ? <Descriptions.Item label="实物描述">{description}</Descriptions.Item> : ''}
        </Descriptions>
        {images.length ? <CarouselContainer title={'图片'} data={images} /> : <span />}
      </DetailMiddle>
    </Fragment>
  )
})
