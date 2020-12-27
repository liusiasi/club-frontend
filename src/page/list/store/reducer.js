import { fromJS} from 'immutable'
import * as constants from './constants'
import {
  ORGANIZATION_TOPIC,
} from 'util/constants'
const defualtState = fromJS({
  data: {
    result: [],
    pageSize: null,
    pageNumber: null,
    total: null,
  },
  isdataLoading: true,
  advanceSearch: false,
  theme: ORGANIZATION_TOPIC,
  totalTheme: 0,
})

export default ( state=defualtState , action )=>{
  const { type, payload } = action;
  switch( type ) {
    case constants.ACTION_SET_PAGE_List:
      return state.set('data', payload)
    case constants.ACTION_SET_LOADING:
      return state.set('isdataLoading',payload)
    case constants.ACTION_SET_ADVANCE_SEARCH:
      return state.set('advanceSearch',payload)
    case constants.ACTION_SET_THEME:
      return state.set('theme',payload)
    case constants.ACTION_SET_TOTAL_THEME:
      return state.set('totalTheme',payload)
    default:
        return state;

  }
}