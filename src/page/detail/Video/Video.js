import React, {
  memo, Fragment
} from 'react'
import {
  DetailMiddle,
  ImageContainer,
} from '../Image/style.js'
import { Descriptions } from 'antd';
import MUtil from 'util/mm.js';
const _mm = new MUtil();

export default memo(function Video(props) {
  const { data } = props;
  const { name, url, description, createTime,createTimeType,relatedPeople,photographer} = data;

  return (
    <Fragment>
      <DetailMiddle>
      <ImageContainer ><a href={url} target="_blank" rel="noopener noreferrer"><video src={url} controls="controls"/></a><p>{name}</p></ImageContainer>
        <Descriptions layout="horizontal" column={1} style={{ width: 500,paddingTop: 30}}>
          {photographer ? <Descriptions.Item label="拍摄者">{photographer}</Descriptions.Item> : ''}

          {createTime ? <Descriptions.Item label="拍摄日期">{_mm.configTime(createTime, createTimeType)}</Descriptions.Item> : ''}
          { relatedPeople?relatedPeople.length?<Descriptions.Item label="相关人物">{ relatedPeople.map((item) =>( (item.peopleName)+' : '+(item.description) + ' ; '))}</Descriptions.Item>: '':''}
          {description ? <Descriptions.Item label="相关描述">{description}</Descriptions.Item> : ''}
        </Descriptions> 
      </DetailMiddle>
    </Fragment>
  )
})
