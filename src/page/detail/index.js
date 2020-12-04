import React, { Component } from 'react';

import './index.less'
import { Spin } from 'antd';
import URI from 'urijs';
import { connect } from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import {
  getClubDetail,
  getActivityDetail,
  getLiteratureDetail,
  getRealObjectDetail,
  getJournalDetail,
  getHistorycalIndexDetail,
  getPeopleDetail,
  getImageDetail,
  getVideoDetail,
} from './store/actionCreator'
import OrgnizationClub from './Orgnization'
import {
  DetailWrapper
} from './style'
import {
  ORGANIZATION_TOPIC,
  ACTIVITY_TOPIC,
  REALOBJECT_TOPIC,
  LITERATURE_TOPIC,
  HISTORICALINDEX_TOPIC,
  JOURNAL_TOPIC,
  IMAGE_TOPIC,
  VIDEO_TOPIC,
  PEOPLE_TOPIC
} from 'util/constants'

const Activity = React.lazy(() => import(/* webpackChunkName: 'activity', webpackPrefetch: true */'./Activity/Activity'));
const Literature = React.lazy(() => import(/* webpackChunkName: 'literature', webpackPrefetch: true */'./Literature/Literature'));
const HistoricalIndex = React.lazy(() => import(/* webpackChunkName: 'historicalIndex', webpackPrefetch: true */'./HistoricalIndex/HistoricalIndex'));
const RealObject = React.lazy(() => import(/* webpackChunkName: 'realObject', webpackPrefetch: true */'./RealObject/RealObject'));
const People = React.lazy(() => import(/* webpackChunkName: 'people', webpackPrefetch: true */'./People/People'));
const Journal = React.lazy(() => import(/* webpackChunkName: 'journal', webpackPrefetch: true */'./Journal/Journal'));
const Image = React.lazy(() => import(/* webpackChunkName: 'image', webpackPrefetch: true */'./Image/Image'));
const Video = React.lazy(() => import(/* webpackChunkName: 'video', webpackPrefetch: true */'./Video/Video'));

class Detail extends Component {
  constructor(props) {
    super(props);
    const query = URI.parseQuery(props.location.search);
    this.state = {
      ...query,
    }
  }
  componentDidMount() {
    const { getClubDetail,
      getActivityDetail,
      getLiteratureDetail,
      getRealObjectDetail,
      getJournalDetail,
      getHistorycalIndexDetail,
      getPeopleDetail,
      getImageDetail,
      getVideoDetail
     } = this.props;
    const { theme, id } = this.state;
    switch (theme) {
      case ORGANIZATION_TOPIC:
        getClubDetail(id);
        return;
      case ACTIVITY_TOPIC:
        getActivityDetail(id)
        return;
      case LITERATURE_TOPIC:
        getLiteratureDetail(id);
        return;
      case HISTORICALINDEX_TOPIC:
        getHistorycalIndexDetail(id);
        return;
      case REALOBJECT_TOPIC:
        getRealObjectDetail(id);
        return;
      case PEOPLE_TOPIC:
        getPeopleDetail(id);
        return;
      case JOURNAL_TOPIC:
        getJournalDetail(id)
        return;
      case IMAGE_TOPIC:
        getImageDetail(id);
        return;
      case VIDEO_TOPIC:
        getVideoDetail(id)
        return;
      default:
        // getClubDetail(id);
        return;
    }

  }
  render() {
    const {
      detailData,
      activityData,
      literatureData,
      historyIndexData,
      realObjectData,
      peopleData,
      journalData,
      imageData,
      videoData,
      isLoading } = this.props;
    const { theme } = this.state;
    return (
      isLoading ? <Spin /> : <DetailWrapper>{
        (() => {
          switch (theme) {
            case ORGANIZATION_TOPIC:
              return <OrgnizationClub data={detailData.toJS()} />;
            case ACTIVITY_TOPIC:
              return <React.Suspense fallback={<div>isLoading</div>}>
                      <Activity data={activityData.toJS()} />
                    </React.Suspense>;
            case LITERATURE_TOPIC:
              return <React.Suspense fallback={<div>isLoading</div>}>
                      <Literature data={literatureData.toJS()} />
                    </React.Suspense>;
            case HISTORICALINDEX_TOPIC:
              return <React.Suspense fallback={<div>isLoading</div>}>
                      <HistoricalIndex data={historyIndexData.toJS()} />
                    </React.Suspense>;
            case REALOBJECT_TOPIC:
              return <React.Suspense fallback={<div>isLoading</div>}>
                      <RealObject data={realObjectData.toJS()} />
                    </React.Suspense>;
            case PEOPLE_TOPIC:
              return <React.Suspense fallback={<div>isLoading</div>}>
                      <People data={peopleData.toJS()} />
                    </React.Suspense>;
            case JOURNAL_TOPIC:
              return <React.Suspense fallback={<div>isLoading</div>}>
                      <Journal data={journalData.toJS()} />
                    </React.Suspense>; 
            case IMAGE_TOPIC:
              return <React.Suspense fallback={<div>isLoading</div>}>
                      <Image data={imageData.toJS()} />
                    </React.Suspense>;
            case VIDEO_TOPIC:
              return <React.Suspense fallback={<div>isLoading</div>}>
                      <Video data={videoData.toJS()} />
                    </React.Suspense>; 
            default:
              return <OrgnizationClub data={detailData.toJS()} />;
          }
        })()
      }</DetailWrapper>



    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.getIn(['detail', 'isdataLoading']),
    detailData: state.getIn(['detail', 'detailData']),
    activityData: state.getIn(['detail', 'activityData']),
    literatureData: state.getIn(['detail', 'literatureData']),
    historyIndexData: state.getIn(['detail', 'historyIndexData']),
    realObjectData: state.getIn(['detail', 'realObjectData']),
    peopleData: state.getIn(['detail', 'peopleData']),
    journalData: state.getIn(['detail', 'journalData']),
    imageData: state.getIn(['detail', 'imageData']),
    videoData: state.getIn(['detail', 'videoData']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getClubDetail,
    getActivityDetail,
    getLiteratureDetail,
    getRealObjectDetail,
    getJournalDetail,
    getHistorycalIndexDetail,
    getPeopleDetail,
    getImageDetail,
    getVideoDetail,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
