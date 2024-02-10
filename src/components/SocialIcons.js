import React from 'react'
import styled from 'styled-components'
import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
const SocialIcons = () => {

    const StyledSocialIcons = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    li{
        list-style:none;
    }
    a{
        color:#fff;
        height:40px;
        width:40px;
        margin-right: 10px;
        border:1px solid #fff;
        border-radius:50%;
        display:inline-flex;
        align-items:center;
        justify-content:center;
    }
    `
  return (
    <StyledSocialIcons>
      <li>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaLinkedin /></a>
      </li>
    </StyledSocialIcons>
  )
}

export default SocialIcons
