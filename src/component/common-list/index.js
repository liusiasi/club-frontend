import React, {
  memo
} from 'react';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import {
  ListWrapper,
  MetaWrapper
} from './style';
import {
  ORGANIZATION_TOPIC,
  ACTIVITY_TOPIC,
  LITERATURE_TOPIC,
  HISTORICALINDEX_TOPIC,
  JOURNAL_TOPIC,
  IMAGE_TOPIC,
  VIDEO_TOPIC,
  PEOPLE_TOPIC,
} from 'util/constants'
import {
  OrgnizationDes,
  ActivityDes,
  LiteratureDes,
  HistoricalindexDes,
  JournalDes,
  PeopleDes,
  ImageDes,
  VideoDes,
} from './description'

const CommonItem = memo(function ListItem(props) {
  const { item, theme } = props;
  const ListDes = (theme) => {
    switch (theme) {
      case '图片':
        return <MetaWrapper>
          <Link to={`/detail?id=${item.id}&theme=${theme}`}
            target="_blank"
          >
            {<img src={item.url} />}
          </Link>
          <p>{item.name}</p>
        </MetaWrapper>
      case '视频':
        return <MetaWrapper>
        <Link to={`/detail?id=${item.id}&theme=${theme}`}
          target="_blank"
        >
          {<video src={item.url} controls="controls" />}
        </Link>
        <p>{item.name}</p>
      </MetaWrapper>
      default:
        return <List.Item.Meta
          avatar={
            <Avatar style={{ width: 60, height: 60 }} src={item.logoUrl} />
          }
          title={
            <Link to={`/detail?id=${item.id}&theme=${theme}`}
              target="_blank"
            >{item.index + "." + item.name}</Link>}
          description={item.description}
        />

    }
  }
  return (
    <List.Item
      key={item.id}
    > {ListDes(theme)}</List.Item>
  )
})



export default memo(function CommonList(props) {
  const {
    data,
    pageSize,
    current,
    total,
    onChange,
    loading,
    theme,
  } = props;
  const themeDescrib = {
    [ORGANIZATION_TOPIC]: OrgnizationDes,
    [ACTIVITY_TOPIC]: ActivityDes,
    [LITERATURE_TOPIC]: LiteratureDes,
    [HISTORICALINDEX_TOPIC]: HistoricalindexDes,
    [JOURNAL_TOPIC]: JournalDes,
    [PEOPLE_TOPIC]: PeopleDes,
    [IMAGE_TOPIC]: ImageDes,
    [VIDEO_TOPIC]: VideoDes,
  }

  const listData = themeDescrib[theme](data, current, pageSize);
  const handleListChange = (page, pageSize) => {
    onChange(page, pageSize);
  }
  const showTotal = () => `显示 ${((current - 1) * pageSize) + 1} 到 ${current * pageSize > total ? total : current * pageSize} 条 , 共 ${total} 条记录`;
  const paginationProps = {
    showTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    current,
    pageSize,
    total,
    onChange: handleListChange,
    onShowSizeChange: handleListChange
  };
  return (
    <ListWrapper>
      <List
        grid={theme === '图片' || theme === '视频' ? {
          gutter: 16,
          column: 2
        } : {}}
        style={theme === '图片' || theme === '视频' ? {} : { marginLeft: 20 }}
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        pagination={total ? paginationProps : ''}
        loading={loading}
        renderItem={item => (
          <CommonItem item={item} theme={theme} />
        )}
      />
    </ListWrapper>
  )
})
