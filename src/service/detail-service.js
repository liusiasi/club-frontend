import { urlPrefix } from './common'
import MUtil from 'util/mm.js';

const _mm = new MUtil();

class DetailInfo{
  clubdetail(param){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/organizationTopic/detailById`,
      data: param,
    })
  }
  activitydetail(param){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/activityTopic/activityDetailById`,
      data: param,
    })
  }
  literaturedetail(param){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/literatureTopic/literatureDetailById`,
      data: param,
    })
  }
  realobjectdetail(param){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/organizationTopic/realObjectDetailById`,
      data: param,
    })
  }
  journaldetail(param){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/journalTopic/journalDetailById`,
      data: param,
    })
  }
  historyindexdetail(param){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/historicalIndexTopic/historicalIndexDetailById`,
      data: param,
    })
  }
  peopledetail(param){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/peopleTopic/peopleDetailById`,
      data: param,
    })
  }
  imagedetail(param){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/imageTopic/imageDetailById`,
      data: param,
    })
  }
  videodetail(param){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/videoTopic/videoDetailById`,
      data: param,
    })
  }
}

export default DetailInfo;