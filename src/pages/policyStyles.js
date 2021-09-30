import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 48px 24px;
  background-color: #1F1300;

  h1, h2, h3, p {
    width: 100%;
    text-align: justify;
    margin: 4px;
  }

  h1 {
    font-size: 16px;
  }

  h2 {
    font-size: 14px;
  }

  h3, p {
    font-size: 12px;
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
    width: 80%;
    height: 100%;
    /* background-color: #f00; */
  }
`;