import { useState } from "react";

export const useModal = (boolean) => {
  const [isShowing, setIsShowing] = useState(boolean);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};
