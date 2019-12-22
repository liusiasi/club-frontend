import * as constants from './constants'
import { fromJS } from 'immutable'
import SupplementService from 'service/supplement-service';
const _supplementservice = new SupplementService();

const setMsg = ( data) => ({
  type: constants.ACTION_SET_MESSAGE_CALL,
  payload: fromJS(data),
})

export const handleSuppelemnt = (data) => {
  return (dispatch) => {
    console.log(data);
    return _supplementservice.submitSupplement(data).then(res => {
      if( res ){
        dispatch(setMsg(res));
      }
    }, errMsg => {
      console.log(errMsg);
    })
  }
}

