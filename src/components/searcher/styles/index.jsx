import styled from 'styled-components';

export const Label = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin: 0px;

  span {
    font-weight: 600;
  }

`;

export const InputContainer = styled.div`
  margin-top: 20px;
`;

export const InputSearcher = styled.input`
width: 85%;
border: 1px solid rgb(225, 228, 232);
padding: 5px 12px;
border-radius: 6px;
height: 24px;

&:focus {    
    border-color: #0366d6;
    outline: none;
    box-shadow: 0 0 0 3px rgba(3,102,214,0.3);
  }
`;

export const SearchButton = styled.button`
 color: #24292e; 
 margin-left: 8px;
 width: 80px;
 height: 36px;
 background-color: #fafbfc;
 cursor: pointer;
 font-weight: 600;
 line-height: 20px;
 border: 1px solid rgba(27,31, 25, 0.15);
 border-radius: 6px;
 outline: none;
`;

export const ProtipsContainer = styled.div` 

  h2 {
    font-size: 14px;
    font-weight: 500;
  }

  h2 > span {
      font-weight: 700;
  }

  a {
      text-decoration: none;
      color: #0366d6;

      &:hover {
        text-decoration: underline;
      }
  }
`;

export const SearcherContainer = styled.div`
  height: 185px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  margin-left: 292px;
  margin-top: 90px; 
  max-width: 932px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;