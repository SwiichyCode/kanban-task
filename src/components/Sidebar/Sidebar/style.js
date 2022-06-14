import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 0;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  border-right: 1px solid #e4ebfa;
  transition: 200ms all ease-in-out;

  &.hide {
    left: -100%;
    transition: all 200ms ease-in-out;
  }

  .content-theme {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
