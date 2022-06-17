import React from "react";
import { ButtonWrapper } from "./style";

export default function Button({ text, maxWidth, style, toggle }) {
  return (
    <ButtonWrapper onClick={toggle} style={{ ...style, ...maxWidth }}>
      {text}
    </ButtonWrapper>
  );
}
