import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUp({ end, duration = 2000, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const endNum = parseInt(end.toString().replace(/,/g, ""), 10);
    if (isNaN(endNum)) {
      setCount(end);
      return;
    }

    const totalFrames = Math.round(duration / 16); // ~60fps
    let frame = 0;

    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const current = Math.round(endNum * easeProgress);

      setCount(current);

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        setCount(endNum);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  const formatNumber = (num) => {
    if (typeof num === "string") return num;
    return num.toLocaleString();
  };

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
