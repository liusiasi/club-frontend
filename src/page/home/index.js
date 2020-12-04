import React, { Component,Fragment } from 'react';
import {
  HomeWraper,
  ContainsNumber
} from './style';
import Footer from 'common/footer';
import SearchInput from 'component/search-input/index';
import CommonList from 'component/common-list/index';
import { connect } from 'react-redux';
import {
  bindActionCreators,
} from 'redux'
import {
  gettotalNumber,
  gethotClub
} from './store/actionCreator'
import {
  setTheme
} from '../list/store/actionCreator'
import {
  toggleSearch
} from '../list/store/actionCreator';
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
    const { gettotalNumber,gethotClub } = this.props;
    gettotalNumber();
    gethotClub();

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
  render() {
    const { advanceSearch,toggleSearch,setTheme,data,theme } = this.props;
    return (
      <Fragment>
        <HomeWraper>
          <ContainsNumber className='title'>中国近现代科技社团</ContainsNumber>
          <ContainsNumber className='nums'>收录了{this.props.totalNumber}条社团信息</ContainsNumber>
          <SearchInput 
            toggleSearch={toggleSearch}
            submitSearchValue={this.handleSearch}
            theme={theme}
            advanceSearch={advanceSearch}
            changeTheme = {(val)=>setTheme(val)}
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
    gettotalNumber,
    gethotClub,
    toggleSearch,
    setTheme,
  },dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(Home);