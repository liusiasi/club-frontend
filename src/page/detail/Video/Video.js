import React, {
  memo, Fragment
} from 'react'
import {
  DetailMiddle,
  ImageContainer,
} from '../Image/style.js'
import { Descriptions } from 'antd';

export default memo(function Video(props) {
  const { data } = props;
  console.log(data);
  const { name, url,people, description, createTime,relatedPeople} = data;

  return (
    <Fragment>
      <DetailMiddle>
      <ImageContainer ><a href={url} target="_blank" ><video src={url} controls="controls"/></a><p>{name}</p></ImageContainer>
        <Descriptions layout="horizontal" column={1} style={{ width: 500,paddingTop: 30}}>
          {people ? <Descriptions.Item label="拍摄者">{people}</Descriptions.Item> : ''}

          {createTime ? <Descriptions.Item label="拍摄日期">{createTime}</Descriptions.Item> : ''}
          { relatedPeople?relatedPeople.length?<Descriptions.Item label="相关人物">{ relatedPeople.map((item, index) =>( (item.peopleName)+' : '+(item.description) + ' ; '))}</Descriptions.Item>: '':''}
          {description ? <Descriptions.Item label="相关描述">{description}</Descriptions.Item> : ''}
        </Descriptions> 
      </DetailMiddle>
    </Fragment>
  )
})
