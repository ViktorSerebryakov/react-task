import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) =>  (props.active ? '0' : '-160px')};
  width: 159px;
  height: 100vh;
  background-color: #f5f5f5;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.2s;
`;

export const HeadButtonBox = styled.div`
  position: absolute;
  left: 175px;
  border-radius: 50%;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  
  &:after {
    content: "";
    width: 0;
    height: 0;
    ${(props) => (
      props.active 
        ? `
	      border-right: 10px solid red;
        ` 
        : `
        border-left: 10px solid red;
        `
    )}
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  
  transition: all 0.1s;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const ItemBox = styled.div`
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: all 0.1s;
  color: rgba( 0, 0, 0, 0.8);
  &:hover {
    background-color: #f1f1f1;
    color: rgba( 0, 0, 0, 1);
  }
  
  & a {
    display: block;
    text-decoration: none;
    color: rgba( 0, 0, 0, 0.8);
    
    &:hover {
     color: rgba( 0, 0, 0, 1);
  }

  }
`;
