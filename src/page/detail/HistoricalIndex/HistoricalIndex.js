import React, {
  memo, Fragment
} from 'react'
import {
  TitleContext,
  DetailMiddle,
} from './style.js'
import { Descriptions } from 'antd';
import CarouselContainer from 'component/carousel-container'

export default memo(function HistoricalIndex(props) {
  const { data } = props;
  const { name, organizationName, description, images, createTime } = data;

  return (
    <Fragment>
      <DetailMiddle>
        <TitleContext>{name}</TitleContext>
        <Descriptions layout="horizontal" column={1} style={{ width: 500 }}>
          {organizationName ? <Descriptions.Item label="相关社团名称">{organizationName}</Descriptions.Item> : ''}
          {createTime ? <Descriptions.Item label="史料日期">{createTime}</Descriptions.Item> : ''}

          {description ? <Descriptions.Item label="史料描述">{description}</Descriptions.Item> : ''}
        </Descriptions>
        {images.length ? <CarouselContainer title={'图片'} data={images} /> : <span />}
      </DetailMiddle>
    </Fragment>
  )
})