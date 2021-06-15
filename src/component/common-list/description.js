import React from 'react';
import {Typography} from 'antd';

import MUtil from 'util/mm.js';
const _mm = new MUtil();

const { Text } = Typography;

export const OrgnizationDes = (data ,current,pageSize ) => {
  let listData = [];
  data.map((item, index) => {
    listData.push({
      index: index + 1 + ((current - 1) * parseInt(pageSize)),
      id: item.get('id'),
      name: item.get('name'),
      logoUrl: item.get('logoUrl') === null ? '/shetuanGw/resource/icon.jpeg' : item.get('logoUrl'),
      description: (<div id='Text'><Text >{'发起人: ' + (item.get('creator') ? item.get('creator') : '暂无')}</Text>
        <br /><Text >{'创办时间: ' + (item.get('startTime') ? _mm.configTime(item.get('startTime'),item.get('startTimeType')) : '未知')}</Text>
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
      logoUrl: item.get('image') === null ? '/shetuanGw/resource/icon.jpeg' : item.get('image'),
      description: (<div id='Text'><Text >{'所属社团: ' + (item.get('organizationName') ? item.get('organizationName') : '暂无')}</Text>
        <br /><Text >{'活动时间: ' + (item.get('startTime') ? _mm.configTime(item.get('startTime'),item.get('startTimeType')) : '未知')}</Text>
        <br /><Text >{'活动地点: ' + (item.get('place') ? item.get('place') : '暂无')}</Text>
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
      logoUrl: item.get('image') === null ? '/shetuanGw/resource/icon.jpeg' : item.get('image'),
      description: (<div id='Text'><Text >{'所属社团: ' + (item.get('organizationName') ? item.get('organizationName') : '暂无')}</Text>
        <br /><Text >{'文献日期: ' + (item.get('createTime') ? _mm.configTime(item.get('createTime'),item.get('createTimeType')) : '未知')}</Text>
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
      logoUrl: item.get('image') === null ? '/shetuanGw/resource/icon.jpeg' : item.get('image'),
      description: (<div id='Text'><Text >{'所属社团: ' + (item.get('organizationName') ? item.get('organizationName') : '暂无')}</Text>
        <br /><Text >{'索引日期: ' + (item.get('createTime') ? _mm.configTime(item.get('createTime'),item.get('createTimeType')) : '未知')}</Text>
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
      logoUrl: item.get('image') === null ? '/shetuanGw/resource/icon.jpeg' : item.get('image'),
      description: (<div id='Text'><Text >{'所属社团: ' + (item.get('organizationName') ? item.get('organizationName') : '暂无')}</Text>
        <br /><Text >{'创刊日期: ' + (item.get('startTime') ? _mm.configTime(item.get('startTime'),item.get('startTimeType')) : '未知')}</Text>
        <br /><Text >{'结刊日期: ' + (item.get('endTimeType') == 5 ? '至今' : item.get('endTime') ? _mm.configTime(item.get('endTime'),item.get('endTimeType')) : '至今')}</Text>
      </div>
      ),

    });
  })
  return listData;
}
export const PeopleDes = (data ,current,pageSize ) => {
  let listData = [];
  data.map((item, index) => {
    const organizationName = item.get('organizationName');
    listData.push({
      index: index + 1 + ((current - 1) * parseInt(pageSize)),
      id: item.get('id'),
      name: item.get('name'),
      logoUrl: item.get('logoUrl') === null ? '/shetuanGw/resource/icon.jpeg' : item.get('logoUrl'),
      description: (<div id='Text'><Text >{'所属社团: ' + (organizationName?organizationName.size ? organizationName.join(',') : '暂无':'暂无')}</Text>
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
      url: item.get('url') === null ? '/shetuanGw/resource/icon.jpeg' : item.get('url'),

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
      url: item.get('url') === null ? '/shetuanGw/resource/icon.jpeg' : item.get('url'),
    });
  })
  return listData;
}

