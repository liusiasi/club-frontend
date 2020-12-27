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

export default memo(function HistoricalIndex(props) {
  const { data } = props;
  const { name, organizationName, description, images, createTime, createTimeType } = data;

  return (
    <Fragment>
      <DetailMiddle>
        <TitleContext>{name}</TitleContext>
        <Descriptions layout="horizontal" column={1} style={{ width: 800 }}>
          {organizationName ? <Descriptions.Item label="所属社团">{organizationName}</Descriptions.Item> : ''}
          {createTime ? <Descriptions.Item label="史料日期">{_mm.configTime(createTime, createTimeType)}</Descriptions.Item> : ''}

          {description ? <Descriptions.Item label="史料描述">{description}</Descriptions.Item> : ''}
        </Descriptions>
        {images.length ? <CarouselContainer title={'图片'} data={images} /> : <span />}
      </DetailMiddle>
    </Fragment>
  )
})