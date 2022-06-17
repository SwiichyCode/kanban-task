import { useState } from "react";

export const useSidebar = (boolean) => {
  const [isVisible, setIsVisible] = useState(boolean);

  function toggleBar() {
    setIsVisible(!isVisible);
  }

  return {
    isVisible,
    toggleBar,
  };
};
