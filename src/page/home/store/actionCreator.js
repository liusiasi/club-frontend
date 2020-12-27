import * as constants from './constants'
import { fromJS } from 'immutable'

import HotClub from 'service/hotclub-service';

const _hotclub = new HotClub();

const setHotClub = (data) =>({
  type: constants.ACTION_SET_HOT_CLUB,
  payload: fromJS(data),
});

export const setTotalNumber = (nums) =>({
  type: constants.ACTION_SET_TOTAL_NUMBER,
  payload: nums,
});


export const getTotalNumber = (theme) => {
  return (dispatch) => {
    console.log(theme);
    _hotclub.getTotalNumber(theme).then(res => {
        if( res.success && res.obj != null ){
            dispatch(setTotalNumber(res.obj));
          }
        }, errMsg => {
          console.log(errMsg);
        })
    }
}

export const getHotClub = () => {
  return (dispatch) => {
    _hotclub.getHotList().then(res => {
      if( res.success && res.obj != null ){
        dispatch(setHotClub(res.obj));
      }
    }, errMsg => {
      console.log(errMsg);
    })
  }
}
