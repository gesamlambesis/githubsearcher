import React from 'react';
import assets from 'assets';
import {
  FooterContainer,
  GithubLink,
  GithubLabel,
} from './styles';

const { GithubIconGrey} = assets;

const Footer = () => {
    return (
        <FooterContainer>            
            <GithubLabel>© 2021 GitHub, Inc.</GithubLabel>
            <GithubLink href="">Terms</GithubLink>
            <GithubLink href="">Privacy</GithubLink>
            <GithubLink href="">Security</GithubLink>
            <GithubLink href="">Status</GithubLink>
            <GithubLink href="">Docs</GithubLink>
            <div>
              <GithubIconGrey />
            </div>
            
            <GithubLink href="">Contact Github</GithubLink>
            <GithubLink href="">Pricing</GithubLink>
            <GithubLink href="">API</GithubLink>
            <GithubLink href="">Training</GithubLink>
            <GithubLink href="">Blog</GithubLink>
            <GithubLink href="">About</GithubLink>            
        </FooterContainer>
    )
}

export default Footer;