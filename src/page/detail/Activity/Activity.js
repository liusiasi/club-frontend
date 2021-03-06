import React, {
  memo,Fragment
} from 'react'
import {
  TitleContext,
  DetailMiddle,
} from '../common.js'
import { Descriptions} from 'antd';
import CarouselContainer from 'component/carousel-container'
import MUtil from 'util/mm.js';
const _mm = new MUtil();

export default memo(function Activity(props) {
  const { data  } = props;
  const { name,organizationName,startTime, startTimeType, endTime, endTimeType, place, type,relatedPeople, content, images,audios,videos } = data;  
  return (
    <Fragment>
      <DetailMiddle>
        <TitleContext>{name}</TitleContext>
        <Descriptions layout="horizontal" column={1} style={{ width: 800}}>
              { organizationName?<Descriptions.Item label="所属社团">{organizationName}</Descriptions.Item>:''}

              { startTime?<Descriptions.Item label="开始日期">{_mm.configTime(startTime,startTimeType)}</Descriptions.Item>:''}
              { endTime?<Descriptions.Item label="结束日期">{_mm.configTime(endTime,endTimeType)}</Descriptions.Item>:''}
              { place?<Descriptions.Item label="活动地点">{place}</Descriptions.Item>:''}
              { type?<Descriptions.Item label="活动类型">{type == 1 ? '学术活动': type == 2 ? '科普活动' : type == 3 ? '实业活动' : '其他活动'}</Descriptions.Item>:''}

              { relatedPeople.length?<Descriptions.Item label="相关人物">{ relatedPeople.map((item) =>( (item.peopleName) + ' '))}</Descriptions.Item>: ''}
              { content?<Descriptions.Item label="活动内容">{content}</Descriptions.Item>:''}
        </Descriptions>
        {images.length? <CarouselContainer title={'图片'} data={images} />:<span/>}
        {audios.length?<CarouselContainer title={'音频'} data={audios} />:<span/>}
        {videos.length?<CarouselContainer title={'视频'} data={videos} />:<span/>}

      </DetailMiddle>
    </Fragment>
  )
})
