import React, {
  memo
} from 'react';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import {
  ListWrapper
} from './style';
import {
  ORGANIZATION_TOPIC,
  ACTIVITY_TOPIC,
  LITERATURE_TOPIC,
  HISTORICALINDEX_TOPIC
} from 'util/constants'
import {
  OrgnizationDes,
  ActivityDes,
  LiteratureDes,
  HistoricalindexDes
} from './description'

const CommonItem = memo(function ListItem(props) {
  const { item,theme } = props;

  return (
    <List.Item
      key={item.id}
    >
      <List.Item.Meta
        avatar={
          <Avatar style={{ width: 60, height: 60 }} src={item.logoUrl} />
        }
        title={
          <Link to={`/detail?id=${item.id}&theme=${theme}`}
            target="_blank"
          >{item.index + "." + item.name}</Link>}
        description={item.description}
      />
    </List.Item>
  )
})
const themeDescrib = {
  [ORGANIZATION_TOPIC]: OrgnizationDes,
  [ACTIVITY_TOPIC]: ActivityDes,
  [LITERATURE_TOPIC]: LiteratureDes,
  [HISTORICALINDEX_TOPIC]: HistoricalindexDes,
}

export default memo(function CommonList(porps) {
  const {
    data,
    pageSize,
    current,
    total,
    onChange,
    loading,
    theme,
  } = porps;
  const listData = themeDescrib[theme](data,current,pageSize);
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
    onChange:handleListChange,
    onShowSizeChange:handleListChange
  };
  return (
    <ListWrapper>
      <List
        style={{ marginLeft: 100 }}
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        pagination={total?paginationProps:''}
        loading={loading}
        renderItem={ item  => (
          <CommonItem item={item} theme={theme}/>
        )}
      />
    </ListWrapper>
  )
})
