import React, { Component } from 'react';
import SearchInput from 'component/search-input/index';

import {
  ListWrapper,
} from './style.js';
import './index.less';
import { connect } from 'react-redux';
import {
  bindActionCreators
} from 'redux'
import URI from 'urijs';
import {
  getClubList,
  toggleSearch,
  getActivityList,
  getLiteratureList,
  getPeopleList,
  getHistoricalIndexList,
  getJournalList,
  getImagelList,
  getVideolList,
  setSearch,
  setTheme
} from './store/actionCreator';
import {
  ORGANIZATION_TOPIC,
  ACTIVITY_TOPIC,
  LITERATURE_TOPIC,
  HISTORICALINDEX_TOPIC,
  JOURNAL_TOPIC,
  IMAGE_TOPIC,
  VIDEO_TOPIC,
  PEOPLE_TOPIC,
} from 'util/constants'
import CommonList from 'component/common-list/index';

class SearchList extends Component {
  state = {
    name: undefined
  }
  themeAction = {
    [ORGANIZATION_TOPIC]: this.props.getClubList,
    [ACTIVITY_TOPIC]: this.props.getActivityList,
    [LITERATURE_TOPIC]: this.props.getLiteratureList,
    [PEOPLE_TOPIC]: this.props.getPeopleList,
    [HISTORICALINDEX_TOPIC]: this.props.getHistoricalIndexList,
    [JOURNAL_TOPIC]: this.props.getJournalList,
    [IMAGE_TOPIC]: this.props.getImagelList,
    [VIDEO_TOPIC]: this.props.getVideolList,
  }

  componentDidMount() {
    document.title = "社团数据知识服务平台";
    const query = URI.parseQuery(this.props.location.search);
    const { advanceSearch,theme } = query;
    this.props.setSearch(advanceSearch === 'true');
    this.props.setTheme(theme);
    query.advanceSearch = (advanceSearch === 'true');
    this.getCommonList({
      page: 1,
      rows:10,
      ...query,
    })
    this.setState({
      ...query,
    })
  }
  getCommonList = (payload) => {
    const { theme } = payload;
    const params = {};
    Object.keys(payload).filter( k => payload[k] !== undefined && payload[k].length !== 0).map(k => { params[k] = payload[k];});
    this.themeAction[theme]({
      state: theme === ORGANIZATION_TOPIC ? 1 : undefined,
      ...params,
      time: undefined,
      theme: undefined,
      advanceSearch: undefined
    })
  }

  /*搜索组件，返回的查询字段，包括theme和advanceSearch
   */
  handleSearch = (payload) => {
    payload.advanceSearch = this.props.advanceSearch;
    const params = Object.keys(payload).filter( k => payload[k] !== undefined && payload[k].length !== 0).map(k => (k + '=' + payload[k])).join('&');
    this.props.history.push(`list?${params}`);
    this.setState({
      ...payload
    })
    this.getCommonList({
      rows:10,
      page:1,
      ...payload,
    });
  }

  handleReset = (payload) => {
    payload.advanceSearch = this.props.advanceSearch;
    this.setState({
      ...payload
    })
  }

  /*切换主题的时候将父组件的暂存state清空
   */
  changeTheme = (theme) => {
    this.props.setTheme(theme);
    const state = {};
    Object.keys(this.state).map(key => state[key] = undefined)
    state.theme = theme
    this.handleSearch(state);
  }

  handleListChange = (page, rows) => {
    this.getCommonList({
      page,
      rows,
      ...this.state,
    })
  }
  toggleSearch = () => {
    const { toggleSearch } = this.props;
    toggleSearch();
  }

  render() {
    const { result, total, pageSize, pageNumber, isdataLoading , theme, advanceSearch} = this.props;
    return (
        <ListWrapper>
          <SearchInput 
            {...this.state}
            theme={theme}
            advanceSearch={advanceSearch}
            toggleSearch={this.toggleSearch}
            submitSearchValue={this.handleSearch}
            changeTheme={this.changeTheme}
            // key={this.state.name}
          ></SearchInput>
          <CommonList 
            data={result} 
            current={pageNumber} 
            pageSize={pageSize} 
            total={total} 
            onChange={this.handleListChange} 
            loading={isdataLoading}
            theme={theme}
            />
        </ListWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  result: state.getIn(['list','data','result']),
  total: state.getIn(['list','data','total']),
  pageSize: state.getIn(['list','data','pageSize']),
  pageNumber: state.getIn(['list','data','pageNumber']),
  isdataLoading: state.getIn(['list','isdataLoading']),
  advanceSearch: state.getIn(['list','advanceSearch']),
  theme: state.getIn(['list','theme'])
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getClubList,
    toggleSearch,
    getActivityList,
    getLiteratureList,
    getPeopleList,
    getHistoricalIndexList,
    getJournalList,
    getImagelList,
    getVideolList,
    setSearch,
    setTheme
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchList);