import { useEffect } from "react";

export const useDisableScroll = (shouldDisable: boolean) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (shouldDisable) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldDisable]);
};
