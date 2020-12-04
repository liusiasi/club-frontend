import * as constants from './constants'
import { fromJS } from 'immutable'
import ListService from 'service/list-service';

const defaultData = {
  result: [],
  pageSize: null,
  pageNumber: null,
  total: null,
}

const _listservice = new ListService();

const setTableList = ( data) => ({
  type: constants.ACTION_SET_PAGE_List,
  payload: fromJS(data),
})

const setLoading= ( data) => ({
  type: constants.ACTION_SET_LOADING,
  payload: data,
})

export const toggleSearch = () => {
  return (dispatch,getState) => {
    const advanceSearch = getState().getIn(['list','advanceSearch']);
    dispatch(setSearch(!advanceSearch));
  }
}

export const setSearch = (payload ) => ({
  type: constants.ACTION_SET_ADVANCE_SEARCH,
  payload,
})


export const setTheme = (payload ) => ({
  type: constants.ACTION_SET_THEME,
  payload,
})

export const getClubList = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _listservice.fetchClubList(data).then(res => {
      if( res.success && res.obj != null ){
        dispatch(setTableList(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setTableList(defaultData));
      dispatch(setLoading(false));
    })
  }
}

export const getActivityList = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _listservice.fetchActivityList(data).then(res => {
      if( res.success && res.obj != null ){
        dispatch(setTableList(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setTableList(defaultData));
      dispatch(setLoading(false));
    })
  }
}

export const getLiteratureList = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _listservice.fetchLiteratureList(data).then(res => {
      if( res.success && res.obj != null ){
        dispatch(setTableList(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setTableList(defaultData));
      dispatch(setLoading(false));
    })
  }
}

export const getPeopleList = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _listservice.fetchPeopleList(data).then(res => {
      if( res.success && res.obj != null ){
        dispatch(setTableList(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setTableList(defaultData));
      dispatch(setLoading(false));
    })
  }
}

export const getHistoricalIndexList = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _listservice.fetchHistoricalIndexList(data).then(res => {
      if( res.success && res.obj != null ){
        dispatch(setTableList(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setTableList(defaultData));
      dispatch(setLoading(false));
    })
  }
}

export const getJournalList = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _listservice.fetchJournalIndexList(data).then(res => {
      if( res.success && res.obj != null ){
        dispatch(setTableList(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setTableList(defaultData));
      dispatch(setLoading(false));
    })
  }
}

export const getImagelList = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _listservice.fetchImageIndexList(data).then(res => {
      if( res.success && res.obj != null ){
        dispatch(setTableList(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setTableList(defaultData));
      dispatch(setLoading(false));
    })
  }
}

export const getVideolList = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    _listservice.fetchVideoIndexList(data).then(res => {
      if( res.success && res.obj != null ){
        dispatch(setTableList(res.obj));
        dispatch(setLoading(false));
      }
    }, errMsg => {
      console.log(errMsg);
      dispatch(setTableList(defaultData));
      dispatch(setLoading(false));
    })
  }
}