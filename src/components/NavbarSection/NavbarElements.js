import { Button } from 'react-bootstrap';
import styled from  'styled-components';


export const NavbarContainer = styled.div`
    max-height: 90px;
    background-color: #FFE8D6;
    padding: 0; 
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
`

export const NavbarLogoContainer = styled.div`
    max-width: 25%;
    padding-left: 20px;
    height: 80px;
    margin-right: 10px;
    display: inline-block;
    text-align: center;
`

export const NavbarLogo = styled.img`
    width: 100%;
    height: 100%;
`

export const NavbarLinksContainer = styled.div`
    float: right;
    width: 70%;
    height: 80px;
    text-align: center;
    
`

export const NavbarLoginButton = styled(Button)`
    width: 120px;
    margin: 25px 10px;
    height: 40px;
    background-color: #FF971D;
    color: #F6F6F6;
    border: none;
    outline: none;
    font-size: 15px;
    font-weight: 900;
    border-radius: 20px;
    font-family: 'Montserrat';
    float: right;
    
    @media only screen and (max-width: 516px) {
        width: 80px;
    }
`
export const NavbarRegisterButton = styled(Button)`
    width: 120px;
    margin: 25px 10px 25px 0px;
    height: 40px;
    background-color: #FF971D;
    color: #F6F6F6;
    border: none;
    outline: none;
    font-size: 15px;
    font-weight: 900;
    border-radius: 20px;
    font-family: 'Montserrat';
    float: right;

    @media only screen and (max-width: 516px) {
        width: 80px;
    }
`
