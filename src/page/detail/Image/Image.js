import React, {
  memo, Fragment
} from 'react'
import {
  DetailMiddle,
  ImageContainer,
} from './style.js'
import { Descriptions } from 'antd';

export default memo(function Image(props) {
  const { data } = props;
  console.log(data);
  const { name, url,photographer, description, createTime,relatedPeople} = data;

  return (
    <Fragment>
      <DetailMiddle>
      <ImageContainer ><a href={url} target="_blank" rel="noopener noreferrer"><img src={url}/></a><p>{name}</p></ImageContainer>
        <Descriptions layout="horizontal" column={1} style={{ width: 500,paddingTop: 30}}>
          {photographer ? <Descriptions.Item label="拍摄者">{photographer}</Descriptions.Item> : ''}

          {createTime ? <Descriptions.Item label="拍摄日期">{createTime}</Descriptions.Item> : ''}
          { relatedPeople.length?<Descriptions.Item label="相关人物">{ relatedPeople.map((item) =>( (item.peopleName)+' : '+(item.description) + ' ; '))}</Descriptions.Item>: ''}
          {description ? <Descriptions.Item label="相关描述">{description}</Descriptions.Item> : ''}
        </Descriptions> 
      </DetailMiddle>
    </Fragment>
  )
})
