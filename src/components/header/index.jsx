import React from 'react';
import assets from 'assets';
import {
  Wrapper,
  Label,
} from './styles';

const { GithubIcon} = assets;


const Header = () => {
  return (
      <Wrapper>
        <GithubIcon />

        <Label>Why Github?</Label>
        <Label>Team</Label>
        <Label>Enterprise</Label>
        <Label>Explore</Label>
        <Label>Marketplace</Label>
        <Label>Pricing</Label>

      </Wrapper>          
  )
}

export default Header;