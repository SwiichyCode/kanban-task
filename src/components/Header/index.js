import React from "react";

import Button from "../Button";
import { HeaderWrapper } from "./style";
import iconEllipsis from "../../assets/icon-vertical-ellipsis.svg";
import HeaderLogo from "../../assets/logo-dark.svg";

export default function Header({ visible, boards }) {
  return (
    <HeaderWrapper>
      <div className="left-side">
        {visible ? null : (
          <div className="content-logo">
            <img src={HeaderLogo} alt="logo" />
          </div>
        )}
        <h1>Platform Launch</h1>
      </div>
      <div className="right-side">
        <Button
          text="+ Add New Task"
          maxWidth={164}
          style={
            boards && boards.length >= 1
              ? { opacity: "1" }
              : { opacity: "0.25" }
          }
        />
        <img src={iconEllipsis} alt="icon-ellipsis" />
      </div>
    </HeaderWrapper>
  );
}
