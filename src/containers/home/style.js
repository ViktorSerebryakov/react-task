import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 960px;
  margin: auto;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Cell = styled.div`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  padding: 8px;
  min-height: 18px;
  height: 100%;
  border: 1px solid rgba( 0, 0, 0, 0.59);
  width: ${(props) => (props.width ? props.width : 'auto')};
`;

export const CellHeader = styled.div`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  padding: 8px;
  height: 100%;
  border: 1px solid rgba( 0, 0, 0, 0.59);
  width: ${(props) => (props.width ? props.width : 'auto')};
  background-color: #f5f5f5;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const FormWrapper = styled.div`
  margin: auto;
  padding: 24px 0;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 195px;
  height: 16px;
  padding: 12px 20px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  border: solid 1px rgba( 0, 0, 0, 0.08);
  
  &:hover {
    background-color: white;
    color: #000000;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 16px;
`;
