import { urlPrefix } from './common'
import MUtil from 'util/mm.js';

const _mm = new MUtil();

class HotClub{
  getTotalNumber(theme){
    return _mm.request({
      type: 'post',
      url: `${urlPrefix}/shetuan_officalWebsite/homePage/totalNumber`,
      data:theme,
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