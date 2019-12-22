import React from 'react';
import {Typography, } from 'antd';
const { Text } = Typography;

export const OrgnizationDes = (data ,current,pageSize ) => {
  let listData = [];
  data.map((item, index) => {
    listData.push({
      index: index + 1 + ((current - 1) * parseInt(pageSize)),
      id: item.get('id'),
      name: item.get('name'),
      logoUrl: item.get('logoUrl') === null ? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' : item.get('logoUrl'),
      description: (<div id='Text'><Text >{'发起人: ' + (item.get('creator') ? item.get('creator') : '暂无')}</Text>
        <br /><Text >{'创办时间: ' + (item.get('createTime') ? item.get('createTime') : '暂无')}</Text>
        <br /><Text >{'创办地点: ' + (item.get('place') ? item.get('place') : '暂无')}</Text>
      </div>
      ),

    });
  })
  return listData;
}
export const ActivityDes = (data ,current,pageSize ) => {
  let listData = [];
  data.map((item, index) => {
    listData.push({
      index: index + 1 + ((current - 1) * parseInt(pageSize)),
      id: item.get('id'),
      name: item.get('name'),
      logoUrl: item.get('image') === null ? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' : item.get('image'),
      description: (<div id='Text'><Text >{'相关社团名称: ' + (item.get('organizationName') ? item.get('organizationName') : '暂无')}</Text>
        <br /><Text >{'创办时间: ' + (item.get('startTime') ? item.get('startTime') : '暂无')}</Text>
        <br /><Text >{'创办地点: ' + (item.get('place') ? item.get('place') : '暂无')}</Text>
      </div>
      ),

    });
  })
  return listData;
}


export const LiteratureDes = (data ,current,pageSize ) => {
  let listData = [];
  data.map((item, index) => {
    listData.push({
      index: index + 1 + ((current - 1) * parseInt(pageSize)),
      id: item.get('id'),
      name: item.get('name'),
      logoUrl: item.get('image') === null ? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' : item.get('image'),
      description: (<div id='Text'><Text >{'相关社团名称: ' + (item.get('organizationName') ? item.get('organizationName') : '暂无')}</Text>
        <br /><Text >{'文献日期: ' + (item.get('createTime') ? item.get('createTime') : '暂无')}</Text>
      </div>
      ),

    });
  })
  return listData;
}

export const HistoricalindexDes = (data ,current,pageSize ) => {
  let listData = [];
  data.map((item, index) => {
    listData.push({
      index: index + 1 + ((current - 1) * parseInt(pageSize)),
      id: item.get('id'),
      name: item.get('name'),
      logoUrl: item.get('image') === null ? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' : item.get('image'),
      description: (<div id='Text'><Text >{'相关社团名称: ' + (item.get('organizationName') ? item.get('organizationName') : '暂无')}</Text>
        <br /><Text >{'史料日期: ' + (item.get('createTime') ? item.get('createTime') : '暂无')}</Text>
      </div>
      ),

    });
  })
  return listData;
}

export const JournalDes = (data ,current,pageSize ) => {
  let listData = [];
  data.map((item, index) => {
    listData.push({
      index: index + 1 + ((current - 1) * parseInt(pageSize)),
      id: item.get('id'),
      name: item.get('name'),
      logoUrl: item.get('image') === null ? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' : item.get('image'),
      description: (<div id='Text'><Text >{'相关社团名称: ' + (item.get('organizationName') ? item.get('organizationName') : '暂无')}</Text>
        <br /><Text >{'创刊日期: ' + (item.get('startTime') ? item.get('startTime') : '暂无')}</Text>
        <br /><Text >{'结刊日期: ' + (item.get('endTime') ? item.get('endTime') : '暂无')}</Text>
      </div>
      ),

    });
  })
  return listData;
}
export const PeopleDes = (data ,current,pageSize ) => {
  let listData = [];
  console.log('peolpe');
  data.map((item, index) => {
    const organizationName = item.get('organizationName');
    listData.push({
      index: index + 1 + ((current - 1) * parseInt(pageSize)),
      id: item.get('id'),
      name: item.get('name'),
      logoUrl: item.get('image') === null ? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' : item.get('image'),
      description: (<div id='Text'><Text >{'相关社团名称: ' + (organizationName?organizationName.size ? organizationName.join(',') : '暂无':'暂无')}</Text>
      </div>
      ),

    });
  })
  return listData;
}
export const ImageDes = (data ,current,pageSize ) => {
  let listData = [];
  data.map((item, index) => {
    listData.push({
      index: index + 1 + ((current - 1) * parseInt(pageSize)),
      id: item.get('id'),
      name: item.get('name'),
      url: item.get('url') === null ? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' : item.get('url'),

    });
  })
  return listData;
}

export const VideoDes = (data ,current,pageSize ) => {
  let listData = [];
  data.map((item, index) => {
    listData.push({
      index: index + 1 + ((current - 1) * parseInt(pageSize)),
      id: item.get('id'),
      name: item.get('name'),
      url: item.get('url') === null ? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' : item.get('url'),
    });
  })
  return listData;
}

