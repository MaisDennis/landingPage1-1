import styled from 'styled-components'
import { useHistory } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #000;

  .greetingsImg {
    height: 100%;
    width: 100%;
    opacity: 0.7;
   
    @media screen and (max-width: 960px) {
    width: auto;
    left: 1000px;
  }
  }

  .wrapper {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    /* background-color: #f00; */
  }

  .greetingsCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    height: auto;
    padding: 24px;
    background-color: #fff;
  }

  .greetingsH1 {
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    color: #1F1300;
    margin-bottom: 24px;
  }

  .greetingsButton {
    border-radius: 50px;
    background: #F7B05B;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: #F7CE5B;
      color: #1F1300;
    }

    @media screen and (max-width: 960px) {
      font-size: 0.8rem;
    }
  }
`;