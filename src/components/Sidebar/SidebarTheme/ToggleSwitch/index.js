import { ToggleSwitchWrapper } from "./style";

export default function ToggleSwitch({ toggleTheme }) {
  return (
    <ToggleSwitchWrapper>
      <input type="checkbox" onClick={() => toggleTheme()} />
      <span class="slider round"></span>
    </ToggleSwitchWrapper>
  );
}
