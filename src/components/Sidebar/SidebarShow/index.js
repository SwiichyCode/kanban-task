import React from "react";
import { SidebarShowWrapper } from "./style";
import IconShow from "../../../assets/icon-show-sidebar.svg";

export default function SidebarShow({ handleToggle }) {
  return (
    <SidebarShowWrapper onClick={handleToggle}>
      <img src={IconShow} alt="icon-show" />
    </SidebarShowWrapper>
  );
}
