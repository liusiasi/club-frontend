import React, { Component, Fragment } from 'react';

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
  getPeopleDetail
} from './store/actionCreator'
import CardActivity from 'component/card-activity';
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

const Activity = React.lazy(() => import(/* webpackChunkName: 'activity' */'./Activity/Activity'));
const Literature = React.lazy(() => import(/* webpackChunkName: 'literature' */'./Literature/Literature'));
const HistoricalIndex = React.lazy(() => import(/* webpackChunkName: 'historicalIndex' */'./HistoricalIndex/HistoricalIndex'));
const RealObject = React.lazy(() => import(/* webpackChunkName: 'realObject' */'./RealObject/RealObject'));
const People = React.lazy(() => import(/* webpackChunkName: 'people' */'./People/People'));
const Journal = React.lazy(() => import(/* webpackChunkName: 'journal' */'./Journal/Journal'));


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
      getPeopleDetail } = this.props;
    const { theme, id } = this.state;
    console.log(this.state);
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
    getPeopleDetail
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
