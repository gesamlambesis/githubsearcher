import styled from 'styled-components';

export const GithubLink = styled.a`
 font-size: 12px;
 text-decoration: none;
 color: #0366d6;
 margin-left: 30px;
 margin-right: 30px;

 &:hover {
    text-decoration: underline;
  }
`;

export const GithubLabel = styled.label`
    color: #586069;
    font-size: 12px;
`;

export const FooterContainer = styled.div`
  display: flex;
  border-top: 1px solid #e1e4e8;
  width: 89%;
  margin: auto auto;
  padding-top: 40px;
  text-align: center;
  margin-bottom: 45px;
  height: 40px;
`;