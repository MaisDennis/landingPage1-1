import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 12px 0 24px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.2 ease-in-out;
  border: none;
  border-radius: 50px;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#fff' : '#fff')};
  /* background: ${({primary}) => (primary ? '#F7B05B' : '#1F1300')}; */
  background: ${({primary}) => (primary ? '#C33C54' : '#1F1300')};
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({dark}) => (dark ? '#1F1300' : '##fff')};
    background: ${({primary}) => (primary ? '#fff' : '#AF9B46')};
  }

  @media screen and (max-width:480px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

export const CheckBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: 8px 0;
  /* background-color: #999; */

  .checkboxInput {
    height: 14px;
    width: auto;
    margin: 0 8px;
    @media screen and (max-width:480px) {
      height: 24px;
      margin: 0 4px;
    }
  }
  /* background-color: #4ee; */
`;

export const CityInput = styled.input`
  height: 48px;
  width: 100%;
  border: 1px solid #ddd;
  padding: 0 12px;
`;

export const CityWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 0px 12px;
`;

export const Heading = styled.label`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  width: 80%;
  margin: 32px 0 4px;
  color: #1F1300;

  @media screen and (max-width: 960px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    margin: 24px 0 4px;
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    margin: 12px 0 0;
    /* font-size: 18px; */
  }
`;

export const InfoContainer = styled.div`
  padding: 32px 0;
  color: #fff;  
  /* background-color: #4ee; */
  @media screen and (max-width: 768px) {
    min-height: 90vh;
    height: auto;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
    background-color: #8EE3EF;
    /* height: 100%; */
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;

  @media screen and (max-width: 1300px) {
    height: auto;
    padding: 22px 0;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    padding: 24px 0;
  }
  /* background-color: #999; */
`;

export const Input = styled.input`
  height: 48px;
  width: 100%;
  border: 1px solid #ddd;
  padding: 0 12px;
  margin: 8px 12px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Option = styled.option`
  font-size: 14px;
`;

export const PolicyLink = styled(LinkR)`
  font-size: 11px;
  margin-left: 4px;
  @media screen and (max-width:480px) {
      width: auto;
    }
  /* background-color: #ee3; */
`;

export const Select = styled.select`
  height: 48px;
  width: auto;
  border: 1px solid #ddd;
  margin-left: 12px;
  padding: 0 12px;
  background: #fff;
`;

export const Select02 = styled.select`
  height: 48px;
  width: 100%;
  border: 1px solid #ddd;
  margin: 8px 12px;
  padding: 0 12px;
  background: #fff;
`;

export const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: auto;
  border-radius: 12px;
  background-color: #fff;

  @media screen and (max-width: 960px) {
    width: 60%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  padding: 0 48px;
  /* background-color: #f00; */

  input {
    height: 48px;
  width: 100%;
  border: 1px solid #ddd;
  padding: 0 12px;
  margin: 8px 0;    
  }

  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const SignUpP = styled.label`
  font-size: 18px;
  text-align: center;
  width: 80%;
  margin: 12px 0 16px;
  color: #1F1300;

  @media screen and (max-width: 768px) {
    width: 90%; 
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    width: 100%; 
  }
`;

export const Span = styled.label`
  font-size: 11px;
  width: auto;
  color: #1F1300;
  /* background-color: #4433ee; */
`;

export const VideoBg = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #101522;
  z-index: -1;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;