import { fromJS} from 'immutable'
import * as constants from './constants'
const defualtState = fromJS({
  actionres: {
    success: null,
    msg: null,
  },

})

export default ( state=defualtState , action )=>{
  const { type, payload } = action;
  switch( type ) {
    case constants.ACTION_SET_MESSAGE_CALL:
      return state.set('actionres', payload)
    default:
        return state;

  }
}