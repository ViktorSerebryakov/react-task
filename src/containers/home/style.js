import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 960px;
  margin: auto;
  outline: 1px solid black;
`;

export const Row = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Cell = styled.div`
  display: inline-block;
  height: 100%;
  width: ${(props) => (props.width ? props.width : 'auto')};
`;
