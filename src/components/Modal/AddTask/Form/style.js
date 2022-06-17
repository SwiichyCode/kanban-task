import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 1em;

  .form-input {
    display: flex;
    flex-direction: column;

    .content-input {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 12px;

      .input {
        width: 100%;
        display: flex;
        align-items: center;
      }

      input {
        width: 100%;
        max-width: 385px;
        box-sizing: border-box;
        padding: 8px 16px;
      }

      svg {
        padding-left: 16px;
        cursor: pointer;

        &:hover {
          fill: #ea5555;
        }
      }
    }

    label {
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: #828fa3;
      padding-bottom: 8px;
    }

    input,
    textarea {
      display: flex;
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
      color: #000112;
      border: 1px solid rgba(130, 143, 163, 0.25);
      border-radius: 4px;
      padding: 8px 16px;

      &::placeholder {
        color: #000112;
        mix-blend-mode: normal;
        opacity: 0.25;
      }
    }

    textarea {
      height: 112px;
      resize: none;
    }

    button {
      font-weight: 700;
      font-size: 13px;
      line-height: 23px;
      text-align: center;
      color: #635fc7;
      background: rgba(99, 95, 199, 0.1);
      border-radius: 20px;
      padding: 8.5px 0;
      border: none;
      cursor: pointer;
    }
  }
`;
