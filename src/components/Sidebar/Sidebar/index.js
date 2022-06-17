import React from "react";

import SidebarBoard from "../SidebarBoard";
import SidebarLogo from "../SidebarLogo";
import SidebarTheme from "../SidebarTheme";
import SidebarVisibility from "../SidebarVisibility";

import { SidebarWrapper } from "./style";
import SidebarShow from "../SidebarShow";

export default function Sidebar({ isVisible, toggleBar }) {
  return (
    <>
      {isVisible ? (
        <SidebarWrapper className={`${isVisible ? "" : "hide"}`}>
          <div className="sidebar-top">
            <SidebarLogo />
            <SidebarBoard />
          </div>
          <div className="sidebar-bot">
            <div className="content-theme">
              <SidebarTheme />
            </div>
            <SidebarVisibility handleToggle={toggleBar} />
          </div>
        </SidebarWrapper>
      ) : (
        <SidebarShow handleToggle={toggleBar} />
      )}
    </>
  );
}
