import { urlPrefix } from './common'
import MUtil from 'util/mm.js';

const _mm = new MUtil();

class HotClub{
  getClubNumber(){
    return _mm.request({
      type: 'post',
      url: `${urlPrefix}/shetuan_officalWebsite/homePage/totalNumber`,
    })
  }
  getHotList(){
    return _mm.request({
      type: 'post',
      url: `${urlPrefix}/shetuan_officalWebsite/homePage/hotlist`,
    })
  }
}

export default HotClub;