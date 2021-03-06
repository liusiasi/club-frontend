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

export default memo(function Literature(props) {
  const { data } = props;
  const { name, organizationName,createTime,createTimeType, source, type, relatedPeople, description, images } = data;

  return (
    <Fragment>
      <DetailMiddle>
        <TitleContext>{name}</TitleContext>
        <Descriptions layout="horizontal" column={1} style={{ width: 800 }}>
          {organizationName ? <Descriptions.Item label="所属社团">{organizationName}</Descriptions.Item> : ''}

          {createTime ? <Descriptions.Item label="文献日期">{_mm.configTime(createTime, createTimeType)}</Descriptions.Item> : ''}
          {source ? <Descriptions.Item label="出处来源">{source}</Descriptions.Item> : ''}
          {type ? <Descriptions.Item label="活动类型">{type == 1 ? '原始文献' : '研究文献'}</Descriptions.Item> : ''}
          {relatedPeople.length ? <Descriptions.Item label="相关人物">{relatedPeople.map((item) => ((item.peopleName)+ ' '))}</Descriptions.Item> : ''}
          {description ? <Descriptions.Item label="文献描述">{description}</Descriptions.Item> : ''}
        </Descriptions>
        {images.length ? <CarouselContainer title={'图片'} data={images} /> : <span />}
      </DetailMiddle>
    </Fragment>
  )
})
