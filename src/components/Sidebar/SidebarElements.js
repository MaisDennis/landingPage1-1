import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #101522;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }

`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #C33C54;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
  /* width: 80%; */
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  border-radius: 50px;
  padding: 16px 64px;
  color: #fff;
  background: #C33C54;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #1F1300;
  }
`;

export const WhatsappLabel = styled.p`
  height: auto;
  font-size: 14px;
  text-align: center;
  margin-left: 8px;
  color: #fff;
  /* background-color: #4ee; */
`;

export const WhatsappRoute = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  text-decoration: none;
  font-weight: bold;
  border-radius: 50px;
  padding: 16px 64px;
  margin-bottom: 16px;
  color: #fff;
  background-color: #81E979;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #8FBB99;
    color: #1F1300;
  }
`;