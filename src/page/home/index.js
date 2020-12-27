import React, { Component,Fragment } from 'react';
import {
  HomeWraper,
} from './style';
import Footer from 'common/footer';
import SearchInput from 'component/search-input/index';
import CommonList from 'component/common-list/index';
import TotalTheme from 'component/total-theme/index';
import { connect } from 'react-redux';
import {
  bindActionCreators,
} from 'redux'
import {
  getTotalNumber,
  getHotClub
} from './store/actionCreator'
import {
  setTheme
} from '../list/store/actionCreator'
import {
  toggleSearch
} from '../list/store/actionCreator';
import {
  ORGANIZATION_TOPIC,
  themeTotal
} from 'util/constants'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalNumbers:0,
      data:[],
    }
  }
  componentDidMount(){
    document.title = "社团数据知识服务平台";
    const { getTotalNumber,getHotClub,setTheme, advanceSearch, toggleSearch } = this.props;
    /** 如果是高级检索的话，恢复为普通检索 */
    (advanceSearch === true) && toggleSearch();
    setTheme(ORGANIZATION_TOPIC);
    getTotalNumber({
      theme: themeTotal[ORGANIZATION_TOPIC]
    });
    getHotClub();
  }

  handleSearch = (payload) => {
    payload.theme = this.props.theme;
    payload.advanceSearch = this.props.advanceSearch;
    payload.rows = 10;
    payload.page = 1;
    const params = Object.keys(payload).filter( k => payload[k] !== undefined && payload[k].length !== 0)
    .map(k => k + '=' + payload[k])
    .join('&');
    this.props.history.push(`/list?${params}`);
  }
  handleReset =() =>{

  }

  /**修改主题也会出发搜索 */
  changeTheme =(theme) => {
    let payload = {};
    payload.theme = theme;
    payload.advanceSearch = this.props.advanceSearch;
    payload.rows = 10;
    payload.page = 1;
    const params = Object.keys(payload).filter( k => payload[k] !== undefined && payload[k].length !== 0)
    .map(k => k + '=' + payload[k])
    .join('&');
    this.props.history.push(`/list?${params}`);
  }
  render() {
    const { advanceSearch,toggleSearch,totalNumber,data,theme } = this.props;
    return (
      <Fragment>
        <HomeWraper>
          <TotalTheme
            theme={theme}
            totalNumber={totalNumber}
          />
          <SearchInput 
            toggleSearch={toggleSearch}
            submitSearchValue={this.handleSearch}
            theme={theme}
            advanceSearch={advanceSearch}
            changeTheme = {this.changeTheme}
          /> 
          <CommonList data={data} current={1} pageSize={10} theme="社团"/>
        </HomeWraper>
        <Footer />
      </Fragment>

    )
  }
}
const mapStateToProps = (state) => ({
  totalNumber: state.getIn(['home','totalNumber']),
  data: state.getIn(['home','data']),
  theme: state.getIn(['list','theme']),
  advanceSearch: state.getIn(['list','advanceSearch']),
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTotalNumber,
    getHotClub,
    toggleSearch,
    setTheme,
  },dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(Home);