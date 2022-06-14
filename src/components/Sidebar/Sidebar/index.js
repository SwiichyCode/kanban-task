import React from "react";

import SidebarBoard from "../SidebarBoard";
import SidebarLogo from "../SidebarLogo";
import SidebarTheme from "../SidebarTheme";
import SidebarVisibility from "../SidebarVisibility";

import { SidebarWrapper } from "./style";
import SidebarShow from "../SidebarShow";

export default function Sidebar({ handleToggle, visible }) {
  return (
    <>
      {visible ? (
        <SidebarWrapper className={`${visible ? "" : "hide"}`}>
          <div className="sidebar-top">
            <SidebarLogo />
            <SidebarBoard />
          </div>
          <div className="sidebar-bot">
            <div className="content-theme">
              <SidebarTheme />
            </div>
            <SidebarVisibility handleToggle={handleToggle} />
          </div>
        </SidebarWrapper>
      ) : (
        <SidebarShow handleToggle={handleToggle} />
      )}
    </>
  );
}
