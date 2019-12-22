import { urlPrefix } from './common'
import MUtil from 'util/mm.js';

const _mm = new MUtil();

class SupplementService{

  submitSupplement(supplementinfo){
    return _mm.rejson({
      type: 'post',
      url: `${urlPrefix}/shetuan_officalWebsite/organizationTopic/list`,
      data:supplementinfo,
    })
  }
}

export default SupplementService;