import React from "react";

import Button from "../Button";
import { HeaderWrapper } from "./style";
import iconEllipsis from "../../assets/icon-vertical-ellipsis.svg";
import HeaderLogo from "../../assets/logo-dark.svg";
import Modal from "../Modal/AddTask/index";
export default function Header({ boards, isVisible, isShowing, toggle }) {
  return (
    <HeaderWrapper>
      <div className="left-side">
        {isVisible ? null : (
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
          toggle={toggle}
          style={
            boards && boards.length >= 1
              ? { opacity: "1" }
              : { opacity: "0.25" }
          }
        />
        <Modal isShowing={isShowing} toggle={toggle} />
        <img src={iconEllipsis} alt="icon-ellipsis" />
      </div>
    </HeaderWrapper>
  );
}
