import { fromJS} from 'immutable'
import * as constants from './constants'
const defualtState = fromJS({
  detailData: {
    organization: {
      relatedPeople:[],
    },
    activities:[],
    constitutions:[],
    historicalDataIndexs:[],
    journals:[], 
    literatures:[], 
    realObjects:[], 
  },
  activityData:{
    relatedPeople: [],
    images:[],
    audio:[],
    video:[]
  },
  literatureData : {
    relatedPeople: [],
    images:[],
  },
  historyIndexData : {
    images:[],
  },
  realObjectData : {
    realObjectDetail: {
      relatedPeople: [],
      images:[],
    }
  },
  peopleData : {
    organizations:[],
    activities:[],
    historicalDataIndexs:[],
    journals:[], 
    literatures:[], 
    realObjects:[], 
    images:[],
    video:[],
    audio:[],

  },
  journalData : {
    relatedPeople: [],
    images:[],
  },
  imageData: {
    relatedPeople: [],
  },
  videoData : {
    relatedPeople: [],
  },
  isdataLoading: true,
})

export default ( state=defualtState , action )=>{
  const { type, payload } = action;
  switch( type ) {
    case constants.ACTION_SET_CLUB_DETAIL:
      return state.set('detailData',payload);
    case constants.ACTION_SET_ACTIVITY_DETAIL:
        return state.set('activityData',payload);
    case constants.ACTION_SET_LITERATURE_DETAIL:
      return state.set('literatureData',payload);
    case constants.ACTION_SET_HISTORICALINDEX_DETAIL:
      return state.set('historyIndexData',payload);
    case constants.ACTION_SET_REALOBJECT_DETAIL:
        return state.set('realObjectData',payload);
    case constants.ACTION_SET_PEOPLE_DETAIL:
        return state.set('peopleData',payload);
    case constants.ACTION_SET_JOURNAL_DETAIL:
      return state.set('journalData',payload);
    case constants.ACTION_SET_IMAGE_DETAIL:
        return state.set('imageData',payload);
    case constants.ACTION_SET_VIDEO_DETAIL:
      return state.set('videoData',payload);
    case constants.ACTION_SET_DETAIL_LOADING:
        return state.set('isdataLoading',payload);
    default:
        return state;

  }
}