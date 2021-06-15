import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 890px;
  margin: 0 auto 20px;
  min-height: 500px;
  .ant-list-vertical .ant-list-item-meta-title > a{
    :hover {
      color: #5c219e;
    }
    color:#215da9;
    font-size: 18px;
    font-weight:bold ;
  }
  .ant-typography.ant-typography-secondary {
    color:#f05000;
  }
  .ant-list-item-meta-title,.ant-list-item-meta-description
  {
    font-size: 16px;
  }
  .ant-pagination-total-text,
  .ant-pagination-item a,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item, .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder,
  .ant-pagination-options-quick-jumper,
  .ant-pagination-options-quick-jumper input
  {
    font-size: 15px;
  }
  .ant-list-pagination .ant-pagination-options {
    margin-top: 6px;
  }
`

export const MetaWrapper = styled.div`
  height:300px;
  width: 400px;
  img ,video {
    width:352px;
    height: 252px;
  }
  p {
    text-align: center;
    width:352px;
  }
`