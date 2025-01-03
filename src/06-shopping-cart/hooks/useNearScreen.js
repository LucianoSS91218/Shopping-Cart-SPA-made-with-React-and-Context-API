import { useEffect, useState, useRef } from "react";

export default function useNearScreen({
  distance = "200px",
  externalRef,
} = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false);

  useEffect(() => {
    const element = externalRef.current;
    if (!element) return;
    // use intersection observer to detect end of the page scroll
    const observer = new IntersectionObserver(
      (entries) => {
        setIsNearScreen(entries[0].isIntersecting);
      },
      {
        rootMargin: distance,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [distance]);

  return { isNearScreen };
}
