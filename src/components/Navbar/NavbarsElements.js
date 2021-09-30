import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

 export const Nav = styled.nav`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 10vh;
  font-size: 1rem;
  z-index: 10;
  margin-top: -10vh;
  background-color: ${({scrollNav}) => (scrollNav ? '#101522' : 'transparent')};
  /* background-color: #ee3; */

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;  
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  /* background-color: #4ee; */

  @media screen and (max-width: 960px) {
    padding: 0 4px;
  }

  @media screen and (max-width: 768px) {
    width: auto;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkS)`
  text-decoration: none;
  font-size: 14px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  border-radius: 50px;
  padding: 10px 22px;
  color: #fff;
  background: #C33C54;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #1F1300;
  }

  @media screen and (max-width: 960px) {
    font-size: 0.8rem;
  }
`;

export const NavItem = styled.li`
  display: flex;
  height: 30px;
  /* background-color: #4ee; */
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center; 
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
    margin-left: 8px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #C33C54;
  }

  @media screen and (max-width: 960px) {
    font-size: 0.8rem;
    padding:  14px 8px 20px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0 48px;
  /* background-color: #999; */
  
  @media screen and (max-width: 960px) {
    margin-right: 0;
    font-size: 0.8rem;
    padding: 8px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
  /* background-color: #999; */
`;

export const WhatsappItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  /* border: 2px solid #81E979; */
  border-radius: 50px;
  padding: 10px 22px;
  background-color: #81E979;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #8FBB99;
    color: #1F1300;
  }

  @media screen and (max-width: 960px) {
    font-size: 0.8rem;
    display: none;
  }

  @media screen and (max-width: 768px) {
    
  }
`;

export const WhatsappLabel = styled.p`
  height: auto;
  font-size: 14px;
  text-align: center;
  margin-left: 8px;
  color: #fff;
  /* background-color: #4ee; */

  @media screen and (max-width: 960px) {
    font-size: 0.8rem;
  }
`;

export const WhatsappLinks = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  color: #fff;
  /* background-color: #4ee; */
`;