import React, { useContext } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

import { ThemeContext } from "../../../styles/Theme";
import { SidebarThemeWrapper } from "./style";
import ToggleSwitch from "./ToggleSwitch";

export default function SidebarTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <SidebarThemeWrapper>
      <BsSunFill color="#828FA3" size={"1.2em"} />
      <ToggleSwitch toggleTheme={toggleTheme} />

      <BsFillMoonStarsFill color="#828FA3" size={"1.2em"} />
    </SidebarThemeWrapper>
  );
}
