import { urlPrefix } from './common'
import MUtil from 'util/mm.js';

const _mm = new MUtil();

class SupplementService{

  submitSupplement(supplementinfo){
    return _mm.rejson({
      type: 'post',
      url: `${urlPrefix}/shetuan_officalWebsite/fileSupplementSubmit`,
      data:supplementinfo,
    })
  }
}

export default SupplementService;