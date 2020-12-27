import styled from 'styled-components';

/**这里为了解决margin塌陷问题 加了一个border */
export const ListWrapper = styled.div`
  width : 1000px;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0);

`

export const ListCard = styled.div`
  width: 1000px;
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
