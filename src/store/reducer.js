import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from 'page/home/store'
import { reducer as detailReducer } from 'page/detail/store'
import { reducer as listReducer } from 'page/list/store'
import { reducer as supplementReducer } from 'page/supplement/store'

const reducer = combineReducers({
  home: homeReducer,
  detail: detailReducer,
  list: listReducer,
  supplement: supplementReducer,
})
export default reducer;
