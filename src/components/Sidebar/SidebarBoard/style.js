import styled from "styled-components";

export const SidebarBoardWrapper = styled.div`
  width: 100%;
  max-width: 276px;
  color: #828fa3;
  font-weight: 700;

  h2 {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    padding-bottom: 19px;
    padding-left: 32px;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      align-items: center;
      height: 48px;
      gap: 0 16px;
      font-size: 15px;
      line-height: 19px;
      padding-left: 32px;
      cursor: pointer;
      border-radius: 0px 100px 100px 0px;
      background: transparent;
      transition: all 200ms ease-in-out;

      &:hover {
        background: rgba(99, 95, 199, 0.25);
        color: #635fc7;
      }
    }

    .btnBoard {
      color: #635fc7;
    }
  }
`;
