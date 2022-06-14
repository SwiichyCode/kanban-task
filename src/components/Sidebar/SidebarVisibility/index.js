import React from "react";
import { SidebarVisibilityWrapper } from "./style";
import SidebarHide from "../../../assets/icon-hide-sidebar.svg";

export default function SidebarVisibility({ handleToggle }) {
  return (
    <SidebarVisibilityWrapper onClick={handleToggle}>
      <img src={SidebarHide} alt="" />
      <span>Hide Sidebar</span>
    </SidebarVisibilityWrapper>
  );
}
