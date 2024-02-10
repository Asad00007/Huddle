import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import styled from "styled-components";
import SocialIcons from "./SocialIcons";
import React from 'react'

const Footer = () => {
 
    const StyledFooter = styled.footer`
    background-color:${({theme})=>theme.colors.footer};
    color:#fff;
    padding:100px 0 60px;

    ul{
        list-style-type:none;
    }

    ul li{
        margin-bottom:20px;
    }

    p{
        text-align:right;
    }

    @media(max-width:${({theme})=>theme.mobile}){  
        text-align:center;
        ul{
            padding:0;
        }
        p{
            text-align:center;
        }
    }
    `

  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus autem asperiores et vel excepturi ut aspernatur, odio esse ipsum veniam molestiae illum aliquid accusamus velit, amet non maiores officia!</li>
                <li>1234567890</li>
                <li>eg@gmail.com</li>
            </ul>
            <ul>
                <li>About Us</li>
                <li>What do we do</li>
                <li>FAQ</li>
            </ul>
            <ul>
                <li>Career</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
            <SocialIcons/>
        </Flex>
        <p>&copy; 2013 All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}

export default Footer
