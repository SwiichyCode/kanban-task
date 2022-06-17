import styled from "styled-components";

export const AddTaskWrapper = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1040;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .modal-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    display: flex;
    align-items: center;
  }

  .modal {
    position: absolute;
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    padding: 32px;
    background: #fff;
    z-index: 100;
    box-sizing: border-box;

    h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      color: #000112;
      padding-bottom: 24px;
    }
  }
`;
