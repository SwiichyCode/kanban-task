import React from "react";
import SidebarBoard from "../SidebarBoard/SidebarBoard";

import SidebarLogo from "../SidebarLogo/SidebarLogo";
import { SidebarWrapper } from "./SidebarStyle";

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <div className="sidebar-top">
        <SidebarLogo />
        <SidebarBoard />
      </div>
      <div className="sidebar-bot"></div>
    </SidebarWrapper>
  );
}
