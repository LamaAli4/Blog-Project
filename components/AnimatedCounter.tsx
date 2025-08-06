"use client";
import React from "react";
import { useMotionValue, animate } from "framer-motion";
import { useInView } from "framer-motion";

type AnimatedCounterProps = {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className,
}: AnimatedCounterProps & { delay?: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const [displayNumber, setDisplayNumber] = React.useState(from);

  React.useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const controls = animate(count, to, {
          duration,
          onUpdate(value) {
            setDisplayNumber(Math.floor(value));
          },
        });

        return () => controls.stop();
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [isInView, count, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {displayNumber.toLocaleString()}
    </span>
  );
}
