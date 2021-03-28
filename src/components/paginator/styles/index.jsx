import styled from "styled-components";
import assets from 'assets';

const { PreviousPage, NextPage} = assets;

export const Container = styled.div.attrs(() => ({
  className: 'PaginatorContainer'
}))`
 width: 100%;
 flex-direction: column;

 ${({ theme }) => theme.breakPoints.largeTablet} {
  display: flex;
  flex-direction: row;
 }

 ${({ theme }) => theme.breakPoints.tablet} {
  display: flex;
}
`;

export const PagesColumn = styled.div.attrs(() => ({
  className: 'PaginatorPagesColumn'
}))`
  display: flex;
  align-items: center;
  margin-top: 20px;
  text-align: center;

  ${({ theme }) => theme.breakPoints.largeTablet} {
    margin-top: 0px;
    text-align: left;
   }
`;

export const Page = styled.div.attrs(() => ({
  className: 'PaginatorPage'
}))`
  margin-right: 0px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: ${props => props.isSelected ? '#0366d6' : ''};
  color: ${props => props.isSelected ? '#FFFFFF' : '#24292e'};
  border-radius: ${props => props.isSelected ? '6px' : ''};

  ${({ theme }) => theme.breakPoints.largeTablet} {
    margin-right: 25px;

    &:hover {     
      color: ${props => props.isSelected ? '#FFFFFF' : '#5DC5EA'};
    }
   }  
`;

export const LeftIconContainer = styled.div.attrs(() => ({
  className: 'PaginatorLeftIconContainer'
}))`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const RightIconContainer = styled.div.attrs(() => ({
  className: 'PaginatorRightIconContainer'
}))`
  display: flex;
  align-items: center;
  margin-right: 0px;
  margin-left: 0px;

  ${({ theme }) => theme.breakPoints.largeTablet} {
    margin-right: 25px;
    margin-left: 0px;
   }
`;

export const NextIconPage = styled(NextPage)`
  cursor: pointer;
  g {
    fill: ${props => props.disabled ? '#ACC2D3' : '#0366d6'};
  }
`;

export const PreviousIconPage = styled(PreviousPage)`
  cursor: pointer;
  g {
    fill: ${props => props.disabled ? '#ACC2D3' : '#0366d6'};
  }
`;
