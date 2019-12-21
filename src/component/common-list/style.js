import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 820px;
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