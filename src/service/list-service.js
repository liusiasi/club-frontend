import { urlPrefix } from './common'
import MUtil from 'util/mm.js';

const _mm = new MUtil();

class ListService{
  fetchClubList(clubinfo){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/organizationTopic/list`,
      data:clubinfo,
    })
  }
  fetchActivityList(clubinfo){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/activityTopic/list`,
      data:clubinfo,
    })
  }
  fetchLiteratureList(clubinfo){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/literatureTopic/list`,
      data:clubinfo,
    })
  }
  fetchPeopleList(clubinfo){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/peopleTopic/list`,
      data:clubinfo,
    })
  }
  fetchHistoricalIndexList(clubinfo){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/historicalIndexTopic/list`,
      data:clubinfo,
    })
  }
  fetchJournalIndexList(clubinfo){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/journalTopic/list`,
      data:clubinfo,
    })
  }
  fetchImageIndexList(clubinfo){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/imageTopic/list`,
      data:clubinfo,
    })
  }
  fetchVideoIndexList(clubinfo){
    return _mm.request({
      type: 'get',
      url: `${urlPrefix}/shetuan_officalWebsite/videoTopic/list`,
      data:clubinfo,
    })
  }
}

export default ListService;