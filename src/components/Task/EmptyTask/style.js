import styled from "styled-components";

export const EmptyTaskWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;

    span {
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      text-align: center;
      color: #828fa3;
    }

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
