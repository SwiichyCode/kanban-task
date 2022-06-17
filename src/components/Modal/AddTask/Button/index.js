import React from "react";
import { ButtonWrapper } from "./style";

export default function Button({ background, color, text, action, type }) {
  return (
    <ButtonWrapper
      type={type}
      onClick={action}
      style={{ background: background, color: color }}
    >
      {text}
    </ButtonWrapper>
  );
}
