import React from "react";
import { ButtonWrapper } from "./style";

export default function Button({ text, maxWidth, style }) {
  return (
    <ButtonWrapper style={{ ...style, ...maxWidth }}>{text}</ButtonWrapper>
  );
}
