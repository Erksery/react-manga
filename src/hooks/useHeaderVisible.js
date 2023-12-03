import { useState, useEffect } from "react";

export const useHeaderVisible = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > previousScrollPosition) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPreviousScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScrollPosition]);

  return { isVisible };
};
