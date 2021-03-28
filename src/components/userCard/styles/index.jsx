import styled from 'styled-components';

export const UserNameLabel = styled.label`
  color: #0366d6;
  margin-right: 4px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const UserLoginLabel = styled.label`
  font-style: normal; 
  font-weight: 600;
  color: ##586069;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const UserBioLabel = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
  color: #24292e;
`;

export const UserLocationLabel = styled.label`
  font-size: 12px;
  color: #586069;
`;

export const Container = styled.div`
  display: flex;
  border-top: 1px solid #e1e4e8;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const AvatarContainer = styled.div`
  margin-right: 8px;
`;

export const Avatar = styled.img`
  border-radius: 100%;
`;