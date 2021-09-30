import styled from 'styled-components'

export const Column01 = styled.div`
  grid-area: col1;
  z-index: 1;
  padding: 0 15px;
  /* background-color: #4ee; */
  @media screen and (max-width: 480px) {
    width: 90%;
    padding: 0;
    /* background-color: #ee3; */
  }
`;

export const Column02 = styled.div`
  grid-area: col2;
  z-index: 1;
  padding: 0 15px;
  /* background-color: #4433ee; */
  @media screen and (max-width: 480px) {
    width: 90%;
    padding: 0;
    /* background-color: #ee3; */
  }
`;

export const Heading = styled.h3`
  font-size: 36px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 24px;
  color: #101522;
  
  @media screen and (max-width: 960px) {
    font-size: 32px;
  }
  
  @media screen and (max-width: 480px) {
  }
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 32px;
  /* background-color: #f00; */
`;

export const Img01 = styled.img`
  height: 600px;
  width: auto;
  max-width: 600px;
  border-radius: 24px;
  padding-right: 0;
  padding-top: 40px;
  margin-right: 44px;
  opacity: 0.9;
  /* background-color: #888; */

  @media screen and (max-width: 960px) {
    height: 400px;
  }

  @media screen and (max-width: 480px) {
    height: 400px;
    max-width: 300px;
    margin-right: 0;
  }
`;

export const Img02 = styled.img`
  height: 450px;
  width: auto;
  border-radius: 24px;
  opacity: 0.9;
  padding-right: 0;
  background-color: #ee3;

  @media screen and (max-width: 960px) {
    height: 300px;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  height: 100%;
  /* background-color: #4ee; */
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  color: #fff;
    
  @media screen and (max-width: 768px) {
  }
  /* background: #12166B; */
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (
    imgStart ? `'col2 col1'`:`'col1 col2'`
  )};

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col2';
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  /* height: 860px; */
  height: 75vh;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media screen and (max-width: 768px) {
    /* min-height: 90vh; */
    /* height: 90vh; */
    height: auto;
    padding: 48px 0;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 21px;
  text-align: left;
  margin-bottom: 16px;
  color: #101522;

  @media screen and (max-width: 960px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Label = styled.label`
  margin-left: 8px;

  @media screen and (max-width: 480px) {
    margin-left: 0;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  height: auto;
  width: 100%;
  /* background-color: #4ee; */
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  /* background-color: #4433ee; */
  
  @media screen and (max-width: 480px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;