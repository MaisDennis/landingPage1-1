import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const ArrowForward = styled(MdArrowForward)`
  font-size: 20px;
  margin-left: 8px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 20px;
  margin-left: 8px;
`;

export const HeroBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const HeroContainer = styled.div`  
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 4px 4px 8px #666;
  z-index: 1;
  padding: 0 30px;
  /* background: #101522; */
  background: #666;

  /* add before stules */
  :before {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: 
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* max-width: 1200px; */
  width: 100%;
  z-index: 3;
  padding: 8px 224px;
  /* background-color: #4ee; */
  
  @media screen and (max-width: 960px) {
    padding: 8px 24px;
  }

`;

export const HeroH1 = styled.h1`
  font-size: 42px;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 960px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    align-items: center;
    font-size: 32px;
    
  }
`;

export const HeroH2 = styled.p`
  font-size: 24px;  
  /* text-align: center; */
  width: 100%;
  margin-top: 24px;
  color: #fff;

  @media screen and (max-width: 960px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    width: 100%;
    
  }
`;

export const HeroP = styled.p`
  font-size: 24px;  
  /* text-align: center; */
  width: 100%;
  margin-top: 24px;
  color: #fff;

  @media screen and (max-width: 960px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    width: 100%;
  }
`;

export const ImgBg = styled.img`
  width: 100%;
  height: auto;
  opacity: .7;
  /* background: #101522; */
  
  @media screen and (max-width: 768px) {
    position: relative;
    right: 500px;
    opacity: .65;
    width: auto;
    height: 100%;
  }
`;