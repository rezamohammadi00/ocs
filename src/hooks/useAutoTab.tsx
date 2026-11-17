import { useCallback, useEffect, useState } from "react";

interface IUseAutoTabOptions<T extends string> {
  /** Ordered list of tab ids */
  ids: readonly T[];
  /** Tab that is active initially */
  defaultId: T;
  /** Auto-advance interval in ms (default: 5000) */
  interval?: number;
  /** Disable auto-advance entirely (default: true = enabled) */
  autoPlay?: boolean;
}

export function useAutoTab<T extends string>({
  ids,
  defaultId,
  interval = 5000,
  autoPlay = true,
}: IUseAutoTabOptions<T>) {
  const [activeId, setActiveId] = useState<T>(defaultId);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-advance to the next tab
  useEffect(() => {
    if (!autoPlay || isPaused || ids.length <= 1) return;

    const timer = setInterval(() => {
      setActiveId((prevId) => {
        const currentIndex = ids.indexOf(prevId);
        const nextIndex = (currentIndex + 1) % ids.length;
        return ids[nextIndex];
      });
    }, interval);

    return () => clearInterval(timer);
    // activeId in deps => manual selection restarts the countdown
  }, [activeId, isPaused, autoPlay, interval, ids]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  return {
    activeId,
    setActiveId, // manual selection
    isPaused,
    pause,
    resume,
    /** Spread onto the element that should pause on hover */
    hoverProps: {
      onMouseEnter: pause,
      onMouseLeave: resume,
    },
  };
}
