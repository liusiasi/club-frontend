import React, { PureComponent } from 'react';
import {
  SearchWraper,
  SearchRadio,
  NavItem,
  SearchContent
} from './style';
import './index.less';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Button, Radio } from 'antd';
import AdvanceSearch from 'component/advance-search/index';
import {
  ORGANIZATION_TOPIC,
  ACTIVITY_TOPIC,
  LITERATURE_TOPIC,
  HISTORICALINDEX_TOPIC,
  JOURNAL_TOPIC,
  IMAGE_TOPIC,
  VIDEO_TOPIC,
  PEOPLE_TOPIC
} from 'util/constants'


class ListSearch extends PureComponent {
  constructor(props){
    console.log('constructor');
    super(props);
    this.state = {
      name: this.props.name
    }
  }


  componentDidUpdate(nextProps){
    if(nextProps.name !== this.props.name){
      this.setState({
        name: this.props.name,
      })
    }

  }

  /*切换主题，应将数据置为空，重新发送请求
   */
  changeSelected = (e) => {
    this.setState({
      name:undefined
    })
    this.props.changeTheme(e.target.value);
  }
  /*修改name
   */
  changeInput = (e) => {
    console.log('changeInput');
    this.setState({
      name: e.target.value,
    })
  }
  /*普通检索的提交，传入name字段
   */
  singleSearchValue = () => {
    this.props.submitSearchValue({
      ...this.state,
      theme: this.props.theme,
    });
  }
  /*回车触发普通检索提交
   */
  keyUp = () => {
    this.singleSearchValue();
  }

  /*高级搜索提交，传入查询条件
   */
  advanceSearchValue = (payload) => {
    payload.theme =  this.props.theme;
    this.props.submitSearchValue(payload);
  }

  /*切换普通检索和高级搜索
   */
  onSearchTypeChange = () => {
    this.props.toggleSearch();
  }
  render() {
    console.log('render');

    const { advanceSearch,theme } = this.props;
    const prefixButton = (<Button type="primary" icon={<SearchOutlined />} id="btn" onClick={this.singleSearchValue}>搜索</Button>);
    return (
      <SearchWraper>
        <SearchRadio>
          <Radio.Group value={theme} size="large" onChange={this.changeSelected}>
            <Radio.Button value={ORGANIZATION_TOPIC}>社团</Radio.Button>
            <Radio.Button value={ACTIVITY_TOPIC}>活动</Radio.Button>
            <Radio.Button value={LITERATURE_TOPIC}>文献</Radio.Button>
            <Radio.Button value={HISTORICALINDEX_TOPIC}>史料</Radio.Button>
            <Radio.Button value={JOURNAL_TOPIC}>期刊</Radio.Button>
            <Radio.Button value={PEOPLE_TOPIC}>人物</Radio.Button>
            <Radio.Button value={VIDEO_TOPIC}>视频</Radio.Button>
            <Radio.Button value={IMAGE_TOPIC}>图片</Radio.Button>
          </Radio.Group>
        </SearchRadio>
        <SearchContent>
          {
            advanceSearch ? <AdvanceSearch handleSearch={this.advanceSearchValue}  {...this.props} theme={theme}></AdvanceSearch>
              :
              <Input id="search" size="large" value={this.state.name} name="searchKeyWord"
                placeholder={"请输入"+theme+"名称"}
                addonAfter={prefixButton}
                onChange={this.changeInput}
                onPressEnter={this.keyUp}
                style={{ width: 720 }}
              />
          }
        </SearchContent>

        <NavItem className='right active' onClick={this.onSearchTypeChange}>{theme}检索</NavItem>

      </SearchWraper>
    )
  }
}

export default ListSearch;
