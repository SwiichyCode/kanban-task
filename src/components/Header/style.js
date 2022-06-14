import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 97px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-sizing: border-box;
  border-bottom: 1px solid #e4ebfa;

  .left-side {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    .content-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      max-width: 209px;
      border-right: 1px solid #e4ebfa;
    }

    h1 {
      display: flex;
      width: 100%;
      max-width: 250px;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      color: #000112;
      padding-left: 32px;
    }
  }

  .right-side {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 192px;
    max-height: 48px;
    padding-right: 32.38px;

    button {
      width: 100%;
      height: 48px;
      max-width: 164px;
      background: #635fc7;
      border-radius: 24px;
      border: none;
      color: #ffffff;
      text-transform: capitalize;
      font-weight: 700;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;
