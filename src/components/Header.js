import React from 'react'
import styled from 'styled-components'
import { Container } from './styles/Container.styled'
import {Button} from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'


const Header = () => {
    const StyledHeader = styled.header`
    background-color:${({theme})=>theme.colors.header};
    padding:40px 0;
    `

    const Nav = styled.nav`
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:40px;

        @media(max-width:${({theme})=>theme.mobile}){
            flex-direction:column;
        }
    `

    const Logo = styled.img`
        @media(max-width:${({theme})=>theme.mobile}){
            margin-bottom:40px;
        }
    `
    const Image= styled.img`
        width:375px;
        margin-left:40px;

        @media(max-width:${({theme})=>theme.mobile}){
            margin:40px 0 30px;
        }
    `
    
  return (
    <StyledHeader>
     <Container>
        <Nav>
            <Logo src='./images/logo.svg' alt=''/>
            <Button>Try it free</Button>
        </Nav>
        <Flex>
            <div>
                <h1>Build A Community Your Fans Will Love</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Hic ratione dolore eaque non molestias ipsum nostrum blanditiis rerum fugiat necessitatibus ex,
                 modi vero quibusdam quisquam. Voluptas temporibus vitae provident deleniti.</p>
                <Button bg='#ff0099' color='#fff'>Get Started For Free</Button>
            </div>

            <Image src='./images/illustration-mockups.svg'/>
        </Flex>
     </Container>
    </StyledHeader>
  )
}

export default Header
