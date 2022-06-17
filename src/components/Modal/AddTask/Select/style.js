import styled from "styled-components";

export const SelectWrapper = styled.div`
  .dropdown {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(130, 143, 163, 0.25);
    border-radius: 4px;
    padding: 8px 16px 9px 16px;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: #000112;
  }

  .dropdown-body {
    display: none;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
    border-radius: 8px;
    gap: 8px;
    padding: 16px;

    .dropdown-item {
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
      color: #828fa3;
      cursor: pointer;
    }
  }

  .dropdown-body.open {
    display: flex;
  }
`;
