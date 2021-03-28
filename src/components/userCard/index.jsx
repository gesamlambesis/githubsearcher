import React from "react";
import {
  UserNameLabel,
  UserLoginLabel,
  UserBioLabel,
  UserLocationLabel,
  Container,
  AvatarContainer,
  Avatar,
} from "./styles";

const getUserUrl = (user) => `https://github.com/${user}`;

const UserCard = ({ userData }) => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar src={userData?.avatar_url || ""} height="20" width="20" />
      </AvatarContainer>

      <div>
        <div>
          <UserNameLabel href={getUserUrl(userData.login)}>
            {userData.name || ""}
          </UserNameLabel>
          <UserLoginLabel href={getUserUrl(userData.login)}>
            {userData.login || ""}
          </UserLoginLabel>
        </div>

        <div>
          <UserBioLabel>{userData.bio}</UserBioLabel>
        </div>

        <div>
          <UserLocationLabel>{userData.location}</UserLocationLabel>
        </div>
      </div>
    </Container>
  );
};

export default UserCard;
