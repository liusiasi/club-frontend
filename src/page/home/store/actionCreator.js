import * as constants from './constants'
import { fromJS } from 'immutable'

import HotClub from 'service/hotclub-service';
import { message } from 'antd';

const _hotclub = new HotClub();

const sethotClub = (data) =>({
  type: constants.ACTION_SET_HOT_CLUB,
  payload: fromJS(data),
});

export const settotalNumber = (nums) =>({
  type: constants.ACTION_SET_TOTAL_NUMBER,
  payload: nums,
});


export const gettotalNumber = () => {
  return (dispatch) => {
    _hotclub.getClubNumber().then(res => {
        if( res.success && res.obj != null ){
            dispatch(settotalNumber(res.obj));
          }
        }, errMsg => {
          console.log(errMsg);
        })
    }
}

export const gethotClub = () => {
  return (dispatch) => {
    _hotclub.getHotList().then(res => {
      if( res.success && res.obj != null ){
        dispatch(sethotClub(res.obj));
      }
    }, errMsg => {
      console.log(errMsg);
    })
  }
}
