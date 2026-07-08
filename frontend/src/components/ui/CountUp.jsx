import { useEffect, useRef, useState } from "react";

function CountUp({
  end,
  duration = 1000,
  prefix = "",
  suffix = "",
}) {
  const [value, setValue] = useState(0);
  const frame = useRef();

  useEffect(() => {
    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Ease Out Cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(end * eased);

      if (progress < 1) {
        frame.current = requestAnimationFrame(animate);
      }
    }

    frame.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame.current);
  }, [end, duration]);

  const display =
    Number.isInteger(end)
      ? Math.round(value)
      : value.toFixed(2);

  return (
    <span
      style={{
        fontVariantNumeric: "tabular-nums",
        display: "inline-block",
        minWidth: "110px",
      }}
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default CountUp;