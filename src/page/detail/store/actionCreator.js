import * as constants from './constants';
import DetailInfo from 'service/detail-service';
import { fromJS }  from 'immutable';
const _detailinfo = new DetailInfo();
const changeClubDetail = ( data ) => ({
  type: constants.ACTION_SET_CLUB_DETAIL,
  payload: fromJS(data),
})
const changeActivityDetail = ( data ) => ({
  type: constants.ACTION_SET_ACTIVITY_DETAIL,
  payload: fromJS(data),
})
const changeLiteratureDetail = ( data ) => ({
  type: constants.ACTION_SET_LITERATURE_DETAIL,
  payload: fromJS(data),
})
const changeHistorycalIndexDetail = ( data ) => ({
  type: constants.ACTION_SET_HISTORICALINDEX_DETAIL,
  payload: fromJS(data),
})
const changeRealObjectDetail = ( data ) => ({
  type: constants.ACTION_SET_REALOBJECT_DETAIL,
  payload: fromJS(data),
})
const changePeopleDetail = ( data ) => ({
  type: constants.ACTION_SET_PEOPLE_DETAIL,
  payload: fromJS(data),
})
const changeJournalDetail = ( data ) => ({
  type: constants.ACTION_SET_JOURNAL_DETAIL,
  payload: fromJS(data),
})
const setLoading = ( payload ) => ({
  type: constants.ACTION_SET_DETAIL_LOADING,
  payload,
})


export const getClubDetail = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _detailinfo.clubdetail({organizationId:id}).then(res => {
      if( res.success && res.obj != null ){
        dispatch(changeClubDetail(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setLoading(false));
    })
  }
}

export const getActivityDetail  = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _detailinfo.activitydetail({id}).then(res => {
      if( res.success && res.obj != null ){
        dispatch(changeActivityDetail(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setLoading(false));
    })
  }
}

export const getLiteratureDetail  = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _detailinfo.literaturedetail({id}).then(res => {
      if( res.success && res.obj != null ){
        dispatch(changeLiteratureDetail(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setLoading(false));
    })
  }
}

export const getRealObjectDetail  = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _detailinfo.realobjectdetail({id}).then(res => {
      if( res.success && res.obj != null ){
        dispatch(changeRealObjectDetail(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setLoading(false));
    })
  }
}

export const getJournalDetail  = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _detailinfo.journaldetail({id}).then(res => {
      if( res.success && res.obj != null ){
        dispatch(changeJournalDetail(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setLoading(false));
    })
  }
}

export const getHistorycalIndexDetail  = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _detailinfo.historyindexdetail({id}).then(res => {
      if( res.success && res.obj != null ){
        dispatch(changeHistorycalIndexDetail(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setLoading(false));
    })
  }
}

export const getPeopleDetail  = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _detailinfo.peopledetail({id}).then(res => {
      if( res.success && res.obj != null ){
        dispatch(changePeopleDetail(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setLoading(false));
    })
  }
}