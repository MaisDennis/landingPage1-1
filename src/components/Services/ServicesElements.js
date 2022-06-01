import styled from 'styled-components'

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  margin-bottom: 4px;
  /* background-color: #f00; */

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    /* height: 240px; */
    /* width: 160px; */
  }

  @media screen and (max-width: 768px) {
    /* height: 210px; */
    /* width: 120px; */
    /* padding: 10px; */
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120vh;
  box-shadow: 4px 4px 8px #666;
  background-color: #101522;

  @media screen and (max-width: 768px) {
    height: 120vh;
    /* min-height: 90vh; */
  }

  @media screen and (max-width: 480px) {
    height: auto;
    padding: 84px 0;
  }
`;

export const ServicesDiv = styled.div`
  display: flex;
  align-items: center;
  min-height: 2.5rem;
  /* background-color: #ee3; */

  @media screen and (max-width: 960px) {
    min-height: 1.9rem;
  }  
  @media screen and (max-width: 768px) {
    
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 36px;
  color: #fff;
  margin-bottom: 32px;
  /* background-color: #4ee; */

  @media screen and (max-width: 960px) {
    font-size: 32px;
    text-align: center;
    width: 80%;
    margin-bottom: 48px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const ServicesH2 = styled.p`
  font-size: .9rem;
  font-weight: bold;
  text-align: center;
  max-width: 100%;
  margin-bottom: 4px;
  color: #fff;
  /* background-color: #4ee; */
  
  @media screen and (max-width: 960px) {
    font-size: .8rem;
  }  
  @media screen and (max-width: 768px) {
  }
`;

export const ServicesIcon = styled.img`
  height: 170px;
  width: 170px;
  height: 100%;
  margin-bottom: 14px;

  @media screen and (max-width: 960px) {
    /* height: 100px;
    width: 100px; */
  }

  @media screen and (max-width: 768px) {
    height: 170px;
    width: auto;
    margin-bottom: 10px;
  }
`;

export const ServicesP = styled.p`
  font-size: .8rem;
  text-align: center;
  max-width: 90%;
  min-height: 1.7rem;
  color: #fff;
  /* background-color: #ee3; */
  

  @media screen and (max-width: 960px) {
    font-size: 0.7rem;
    min-height: 1.5rem;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* grid-template-columns: 1fr 1fr; */
  grid-auto-columns: 1fr;
  grid-template-areas: 'col1 col2 col3 col4 col5';
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  /* background-color: #4433ee; */

  a {
    text-decoration: none;
    color: #101522;
  }

  @media screen and (max-width: 1000px) {
    /* grid-template-columns: 1fr 1fr; */
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 460px) {
    /* grid-template-columns: 1fr; */
    grid-template-areas: 'col1 col2';
  }
  /* background: #4ee; */
`;