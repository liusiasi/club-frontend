import { fromJS} from 'immutable'
import * as constants from './constants'
const defualtState = fromJS({
  data: [],
  totalNumber: 0,
})

export default ( state=defualtState , action )=>{
  const { type, payload } = action; 
  switch( type) {
    case constants.ACTION_SET_HOT_CLUB:
      return state.set('data', payload);
    case constants.ACTION_SET_TOTAL_NUMBER:
      return state.set('totalNumber', payload);
    default:
        return state;

  }
}