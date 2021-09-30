import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8vh;
  background-color: #101522;

  @media screen and (max-width: 680px) {
    height: auto;
  }
`;

export const FooterLabel = styled.p`
  height: 100%;
  font-size: 12px;
  margin: 8px;
  color: #fff;
`;

export const FooterLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  color: #fff;
  /* background-color: #4ee; */
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  /* background-color: #4433ee; */
`;

// export const SocialIcons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 240px;
// `;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  /* margin: 40px auto 0 auto; */
  /* background-color: #4ee; */
  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 12px 0;
  }
`;

// export const SocialIconLink = styled.a`
//   color: #fff;
//   font-size: 24px;
// `;

export const SocialLogo = styled(Link)`
  display: flex;
  align-items: center;  
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  margin: 4px;
  color: #fff;
`;

export const WebsiteRights = styled.small`
  margin: 4px;
  color: #fff;
`;